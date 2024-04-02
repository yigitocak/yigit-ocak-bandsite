import BandSiteApi from "./band-site-api.js";

const bandSiteApiInstance = new BandSiteApi

const shows = document.querySelector(".shows")

const showsList = document.createElement("ul")
showsList.classList.add("shows__list")
shows.appendChild(showsList)

const showsLabelTablet = document.createElement("li")
showsLabelTablet.classList.add("shows__label-item")
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
showsLabel.classList.add("shows__label-tablet--location")
showsLabel.textContent = "LOCATION"
showsLabelTablet.appendChild(showsLabel)

const renderTickets = async () => {
    const ticketArray = await bandSiteApiInstance.getShows()

    ticketArray.forEach(item => {

        let showsItem = document.createElement("li")
        showsItem.classList.add("shows__item")
        showsList.appendChild(showsItem)

        showsItem.setAttribute("tabindex", "0");

        let showsLabel = document.createElement("span")
        showsLabel.classList.add("shows__label")
        showsLabel.textContent = "DATE"
        showsItem.appendChild(showsLabel)

        let date = new Date(item.date);
        const formattedDate = date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        }).replace(/,/g, ' ');

        let showsDate = document.createElement("p")
        showsDate.classList.add("shows__date")
        showsDate.textContent = formattedDate
        showsItem.appendChild(showsDate)

        showsLabel = document.createElement("span")
        showsLabel.classList.add("shows__label")
        showsLabel.textContent = "VENUE"
        showsItem.appendChild(showsLabel)

        let showsVenue = document.createElement("p")
        showsVenue.classList.add("shows__venue")
        showsVenue.textContent = item.place
        showsItem.appendChild(showsVenue)

        showsLabel = document.createElement("span")
        showsLabel.classList.add("shows__label")
        showsLabel.textContent = "LOCATION"
        showsItem.appendChild(showsLabel)

        let showsLocation = document.createElement("p")
        showsLocation.classList.add("shows__location")
        showsLocation.textContent = item.location
        showsItem.appendChild(showsLocation)

        let showsButton = document.createElement("button")
        showsButton.classList.add("shows__button")
        showsButton.textContent = "BUY TICKETS"
        showsItem.appendChild(showsButton)
    })
}

renderTickets()