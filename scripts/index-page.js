import BandSiteApi from "./band-site-api.js";

const bandSiteApiInstance = new BandSiteApi

const form = document.querySelector(".comment__form")
const formParent = document.querySelector(".comment__parent")
const inputBox = document.querySelector(".comment__name")
const commentArea = document.querySelector(".comment__add")

function submitForm(e) {
    e.preventDefault();

    const inputBoxValue = inputBox.value;
    const commentBoxValue = commentArea.value;
    let isValid = true

    inputBox.classList.remove("comment__name--invalid")
    commentArea.classList.remove("comment__add--invalid")

    if (inputBoxValue === "" && commentBoxValue === "") {
        inputBox.classList.add("comment__name--invalid")
        commentArea.classList.add("comment__add--invalid")
        isValid = false
    }
    else if (inputBoxValue === "") {
        inputBox.classList.add("comment__name--invalid")
        isValid = false
    }
    else if (commentBoxValue === "") {
        commentArea.classList.add("comment__add--invalid")
        isValid = false
    }
    else {
        inputBox.classList.remove("comment__name--invalid")
        commentArea.classList.remove("comment__add--invalid")
    }

    return isValid
}

const commentList = document.createElement("ul")
commentList.classList.add("comment__list")

const renderComments = async () => {
    commentList.replaceChildren()

    const commentArray = await bandSiteApiInstance.getComments();

    commentArray.forEach(item => {

        let commentItem = document.createElement("li")
        commentItem.classList.add("comment__item")
        commentList.appendChild(commentItem)

        let commentUser = document.createElement("span")
        commentUser.classList.add("comment__user-avatar")
        commentItem.appendChild(commentUser)

        let commentSpan = document.createElement("span")
        commentSpan.classList.add("comment__name-user")
        commentSpan.textContent = item.name
        commentItem.appendChild(commentSpan)

        let commentTime = document.createElement("span")
        let commentDate = new Date(item.timestamp);
        commentTime.classList.add("comment__time")
        commentTime.textContent = commentDate.toLocaleDateString()
        commentItem.appendChild(commentTime)

        let commentParagraph = document.createElement("p")
        commentParagraph.classList.add("comment__paragraph")
        commentParagraph.textContent = item.comment
        commentItem.appendChild(commentParagraph)

        let separator = document.createElement("span")
        separator.classList.add("comment__separator")
        commentItem.appendChild(separator)

        formParent.appendChild(commentList)
    })
}

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if(submitForm(event) === true) {
        bandSiteApiInstance.postComment(event.target)
        bandSiteApiInstance.getComments()
        renderComments()
        event.target.reset()
    }
})

renderComments()