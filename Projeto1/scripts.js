const switchMode = document.querySelector(".switchMode");

switchMode.addEventListener("click", function () {
	const profileElement = document.getElementById("profile");
	const imgElement = profileElement.querySelector("img");
	const imgSwitchMode = switchMode.querySelector("img");

	document.body.classList.toggle("darkMode");

	// Toggle the profile photo image source
	if (document.body.classList.contains("darkMode")) {
		imgElement.src = "./assets/avatarProfilePhotoDark.png";
		imgSwitchMode.src = "./assets/SwitchModeDark.png";
	} else {
		imgElement.src = "./assets/avatarProfilePhotoLight.png";
		imgSwitchMode.src = "./assets/SwitchModeLight.png";
	}
});
