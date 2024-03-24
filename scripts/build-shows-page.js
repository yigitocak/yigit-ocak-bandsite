const ticketArray = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {

        date: "Tue Sept 17 2024",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Oct 12 2024",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 16 202",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 29 2024",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 18 2024",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
]

const shows = document.querySelector(".shows")

const showsList = document.createElement("ul")
showsList.classList.add("shows__list")
shows.appendChild(showsList)

const showsLabelTablet = document.createElement("li")
showsLabelTablet.classList.add("shows__label-tablet")
showsList.appendChild(showsLabelTablet)

let showsLabel = document.createElement("span")
showsLabel.classList.add("shows__label-tablet")
showsLabel.textContent = "DATE"
showsLabelTablet.appendChild(showsLabel)

showsLabel = document.createElement("span")
showsLabel.classList.add("shows__label-tablet")
showsLabel.textContent = "VENUE"
showsLabelTablet.appendChild(showsLabel)

showsLabel = document.createElement("span")
showsLabel.classList.add("shows__label-tablet")
showsLabel.textContent = "LOCATION"
showsLabelTablet.appendChild(showsLabel)


const renderTickets = () => {
    ticketArray.forEach((index) => {
        let showsItem = document.createElement("li")
        showsItem.classList.add("shows__item")
        showsList.appendChild(showsItem)

        let showsLabel = document.createElement("span")
        showsLabel.classList.add("shows__label")
        showsLabel.textContent = "DATE"
        showsItem.appendChild(showsLabel)

        let showsDate = document.createElement("p")
        showsDate.classList.add("shows__date")
        showsDate.textContent = index.date
        showsItem.appendChild(showsDate)

        showsLabel = document.createElement("span")
        showsLabel.classList.add("shows__label")
        showsLabel.textContent = "VENUE"
        showsItem.appendChild(showsLabel)

        let showsVenue = document.createElement("p")
        showsVenue.classList.add("shows__venue")
        showsVenue.textContent = index.venue
        showsItem.appendChild(showsVenue)

        showsLabel = document.createElement("span")
        showsLabel.classList.add("shows__label")
        showsLabel.textContent = "LOCATION"
        showsItem.appendChild(showsLabel)

        let showsLocation = document.createElement("p")
        showsLocation.classList.add("shows__location")
        showsLocation.textContent = index.location
        showsItem.appendChild(showsLocation)

        let showsButton = document.createElement("button")
        showsButton.classList.add("shows__button")
        showsButton.textContent = "BUY TICKETS"
        showsItem.appendChild(showsButton)
    })
}

renderTickets()