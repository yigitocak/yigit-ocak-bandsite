const commentArray = [
    {
        name: "Victor Pinto",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        time:"11/02/2023"
    },
    {
        name: "Christina Cabrera",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        time: "10/28/2023"
    },
    {
        name: "Isaac Tadesse",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.\n",
        time: "10/20/2023"
    }
]

const time = new Date()
// Timestamp as date
const timestampDate = ` ${time.toLocaleDateString()}`
// Timestamp as hour
//const timestampHour = `${time.toLocaleTimeString([], { hour12: true })}`

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

const renderComments = () => {
    commentList.replaceChildren()

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
        commentTime.classList.add("comment__time")
        commentTime.textContent = item.time
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

renderComments()

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if(submitForm(event) === true) {
        commentArray.unshift({name:event.target.fullName.value, comment:event.target.addedComment.value, time:timestampDate})
        renderComments()
    }
    else {
        event.target.reset()
    }

    event.target.reset()
})


