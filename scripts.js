 // Coordinates in decimal degrees format
var lat1 = 38.67335;
var lon1 = -121.12505;
var lat2 = 38.67364;
var lon2 = -121.12373;
var lat3 = 38.6542;
var lon3 = -121.1822;
var lat4 = 38.6544;
var lon4 = -121.1820;
var lat5 = 38.6544;
var lon5 = -121.1822;
var lat6 = 38.6572;
var lon6 = -121.1820;
var lat7= 38.6578;
var lon7 = -121.1664;
var lat8 = 38.6572;
var lon8 = -121.1100;
var lat9 = 38.65521;
var lon9 = -121.17745;

 //var map = L.map('map').setView([38.66, -121.15], 13);
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //maxZoom: 25,
    //attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);
var map = L.map('map').setView([38.67, -121.15], 13);
L.tileLayer('https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.jpg?access_token=sk.eyJ1IjoibWF0dHl2dyIsImEiOiJjbG5lNGp5d3cwYWp0MnNuczZ4cjJ4cWE0In0.yqtDygTe6rDGeFgZU6HCnw', {
    maxZoom: 19,
    tileSize: 512,
    zoomOffset: -1,
    attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> | ' +
         '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

 // Add landmarks as markers
var tree1 = L.marker([lat1, lon1]).addTo(map);
tree1.on('click', function () {
    console.log("Marker clicked");
    openTreeInfoModal(0); // Open the modal for the first tree
});
var tree2 = L.marker([lat2, lon2]).addTo(map);
tree2.on('click', function () {
    console.log("Marker clicked");
    openTreeInfoModal(1); // Open the modal for the second tree
});
var tree3 = L.marker([lat3, lon3]).addTo(map);
tree3.on('click', function () {
    console.log("Marker clicked");
    openTreeInfoModal(2); 
});
var tree4 = L.marker([lat4, lon4]).addTo(map);
tree4.on('click', function () {
    console.log("Marker clicked");
    openTreeInfoModal(3); 
});
var tree5 = L.marker([lat5, lon5]).addTo(map);
tree5.on('click', function () {
    console.log("Marker clicked");
    openTreeInfoModal(4);
});
var tree6 = L.marker([lat6, lon6]).addTo(map);
tree6.on('click', function () {
    console.log("Marker clicked");
    openTreeInfoModal(5);
});
var tree7 = L.marker([lat7, lon7]).addTo(map);
tree7.on('click', function () {
    console.log("Marker clicked");
    openTreeInfoModal(6);
});
var tree8 = L.marker([lat8, lon8]).addTo(map);
tree8.on('click', function () {
    console.log("Marker clicked");
    openTreeInfoModal(7);
});
var tree9 = L.marker([lat9, lon9]).addTo(map);
tree9.on('click', function () {
    console.log("Marker clicked");
    openTreeInfoModal(8);
});



var trees = [
    {
        name: "Valley Oak #1",
        description: "This Valley Oak Tree can be spotted from Phillip C Cohn Park and Folsom Kids Play Park (Castle Park) off Prewett Drive. The Valley Oak nicknamed (--), became an addition to Folsom's Landmark Tree program on August 12th, 1997. Fun Fact: This location is Accurate :D",
        photos: ["Valley_Oak1_1.jpeg", "Valley_Oak1_2.jpeg", "Valley_Oak1_3.jpeg", "Valley_Oak1_4.jpeg", "Valley_Oak1_5.jpeg"]
    },
    {
        name: "Valley Oak #2",
        description: "This Valley Oak Tree is located on one of Folsom's Trails at Phillip C Cohn Park. Nicknamed (--), this Valley Oak was established as a Landmark Tree on August 12th, 1997. Fun Fact: This location is Accurate :D",
        photos: ["Valley_Oak2_1.jpeg", "Valley_Oak2_2.jpeg", "Valley_Oak2_3.jpeg", "Valley_Oak2_4.jpeg", "Valley_Oak2_5.jpeg"]
    },
    {
        name: "Sequoia (Sequoiadendron Giganteum)",
        description: "Currently the tallest tree in the Program, the (diameter) Sequoia tree lives on the corner of Folsom Blvd and Blue Ravine Road in The Creek shopping center. Given the name (tree nickname), this tree has been an established Landmark Tree with the City of Folsom since May 14th, 1996.",
        photos: ["Sequoia_1.jpeg", "Sequoia_2.jpeg", "Sequoia_3.jpeg", "Sequoia_4.jpeg"]
    },
    {
        name: "Tulip (Liriodendron Tulipifera)",
        description: "This 31.2” Tulip tree is located on the corner of Folsom Blvd and Blue Ravine Road in the Creek Shopping center. This tree nicknamed (--) is one of Folsom's oldest Landmark trees, designated on May 14th, 1996.",
        photos: ["Tulip_1.jpeg", "Tulip_2.jpeg", "Tulip_3.jpeg"]
    },
    {
        name: "Sycamore (Platanus Occidentalis)",
        description: "Folsom's 32” Sycamore tree is located on the corner of Folsom Blvd and Blue Ravine Road in The Creek Shopping Center. Nicknamed (--), this tree has been an established landmark tree since its origination on May 14th, 1996.",
        photos: ["Sycamore_1.jpeg", "Sycamore_2.jpeg", "Sycamore_3.jpeg", "Sycamore_4.jpeg"]
    },
    {
        name: "Oak Woodland Grove",
        description: "The Oak Woodland Grove in Folsom is located along Folsom Blvd and consists of a multitude of Folsom's classic Oak trees. The Oak Woodland Grove nicknamed (--) marks the first grove in Folsom's Landmark Tree Program.",
        photos: ["Oak_Woodland_Grove_1.jpeg", "Oak_Woodland_Grove_2.jpeg", "Oak_Woodland_Grove_3.jpeg", "Oak_Woodland_Grove_4.jpeg", "Oak_Woodland_Grove_5.jpeg", "Oak_Woodland_Grove_6.jpeg"]
    },
    {
        name: "Riparian Grove",
        description: "The Willow Creek Grove can be found on the trails near Willow Creek Drive. Consisting of multiple Riparian trees, this grove is one of two established landmarks in Folsom. It was designated on March 9th, 1999.",
        photos: ["Riparian_Grove_1.jpeg", "Riparian_Grove_2.jpeg"]
    },
    {
        name: "Blue Oak",
        description: "Folsom's Blue Oak Landmark tree is located off Caversham and Serpa Way, behind Vista Del Lago High School. Folsom Lake is visible from the hill the (nickname) Tree sits on. This tree was established as a Landmark Tree on March 9th 1999",
        photos: ["Blue_Oak_1.jpeg", "Blue_Oak_2.jpeg", "Blue_Oak_3.jpeg", "Blue_Oak_4.jpeg", "Blue_Oak_5.jpeg"]
    },
    {
        name: "Interior Live Oak",
        description: "This large Interior Live Oak tree in Folsom is in front of The Dermatology Center of Northern California on Blue Ravine Road. The (--) (it's given nickname), is one of the new additions to Folsom's Landmark Tree Program, being designated on February 28th, 2023. Fun Fact: This location is Accurate :D",
        photos: ["Interior_Live_Oak_1.jpeg", "Interior_Live_Oak_2.jpeg", "Interior_Live_Oak_3.jpeg", "Interior_Live_Oak_4.jpeg"]
    },
            // Add more tree data as needed
];








var openModalIndex = null; // Track the index of the currently open modal
var currentPhotoIndex = 0; // Track the index of the currently displayed thumbnail photo

// Function to open the tree info modal and initialize photo index
function openTreeInfoModal(treeIndex) {
    if (openModalIndex === treeIndex) {
        // Modal is already open for this tree, do nothing
        return;
    }
    // Initialize photo index to the first photo
    currentPhotoIndex = 0;

    var tree = trees[treeIndex];
    var modalContent = `
        <span class="close" onclick="closeModal()">&times;</span>
        <h2>${tree.name}</h2>
        <p>${tree.description}</p>
        <div class="main-modal-thumbnails">
            ${tree.photos.map((photo, index) => `
                <img src="images/${photo}" alt="${tree.name}" 
                    onclick="openPhotoViewerModal('images/${photo}', ${index})" 
                    class="thumbnail" />
            `).join('')}
        </div>
        `;
    // Update the modal content
    document.getElementById("tree-info-content").innerHTML = modalContent;

    // Show the modal
    var modal = document.getElementById("treeInfo"); // Updated ID
    modal.style.display = "block";

    // Update the open modal index
    openModalIndex = treeIndex;
}


// Function to display the full-sized image modal
function openPhotoViewerModal(imageSrc, index) {
    console.log("Thumbnail clicked")
    // Create a new modal for displaying the full-sized image
    var PhotoViewerModalContent = `
        <span class="close" onclick="closePhotoViewerModal()">&times;</span>
        <img src="${imageSrc}" alt="Full Image" id="full-image" class="photo-viewer-image" />
        <div class="modal-arrows">
            <button id="prevBtn" onclick="navigateImages(${index - 1})">&#10094; Previous</button>
            <button id="nextBtn" onclick="navigateImages(${index + 1})">Next &#10095;</button>
        </div>
        <button class="back-button" onclick="closePhotoViewerModal()">Back to Tree Info</button>
    `;

    // Update the modal content
    document.getElementById("photoViewerModal").innerHTML = PhotoViewerModalContent;

    // Show the full-sized image modal
    var modal = document.getElementById("photoViewerModal");
    modal.style.display = "flex";

    // Update the current image index
    currentImageIndex = index;
}

// Function to close the thumbnail modal
function closeModal() {
    var treeInfoModal = document.getElementById("treeInfo");
    treeInfoModal.style.display = "none";
    openModalIndex = null;
}

// Function to close the full-sized image modal
function closePhotoViewerModal() {
    var photoViewerModal = document.getElementById("photoViewerModal");
    photoViewerModal.style.display = "none";
}

// Function to navigate to the next or previous image
function navigateImages(index) {
    var newIndex = index;
    // Check bounds
    if (newIndex < 0) {
        newIndex = 0;
    } else if (newIndex >= trees[openModalIndex].photos.length) {
        newIndex = trees[openModalIndex].photos.length - 1;
    }

    // Display the new image
    closePhotoViewerModal()
    openPhotoViewerModal(`images/${trees[openModalIndex].photos[newIndex]}`, newIndex);
}
