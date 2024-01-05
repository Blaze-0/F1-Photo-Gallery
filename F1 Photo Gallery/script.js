document.addEventListener("DOMContentLoaded", function () {
	const thumbnailContainer = document.getElementById("thumbnailContainer");
	const imageContainer = document.getElementById("imageContainer");
	const images = [
		"f1 1.jpg",
        "f1 2.jpg",
        "f1 3.jpg",
        "f1 4.jpg",
        "f1 5.jpeg",
        "f1 6.jpg",
        "f1 7.jpg",
        "f1 8.jpg",
        "f1 9.jpeg",
        "f1 10.jpg",
        "f1 11.jpg",
        "f1 12.jpg",
        "f1 13.jpg",
        "f1 14.jpg",
        "f1 15.jpg",
];
	images.forEach((image, index)=>{
		const thumbnail = document.createElement("img");
		thumbnail.src = image;
		thumbnail.alt = `Thumbnail ${index + 1}`;
		thumbnail.classList.add("thumbnail");
		thumbnail.addEventListener("click",()=> showImage(index));
		thumbnailContainer.appendChild(thumbnail);
	});
	function showImage(index){
		const selectedImage = images[index];
		imageContainer.innerHTML = "";

		const imgElement = document.createElement("img");
		imgElement.src = selectedImage;
		imgElement.alt = `Image ${index + 1}`;

		imageContainer.appendChild(imgElement);
	}
});