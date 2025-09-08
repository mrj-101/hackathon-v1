class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
<header class="app-header fixed-top">
		<div class="app-header-inner">
			<div class="container-fluid py-2">
				<div class="app-header-content">
					<div class="row justify-content-between align-items-center">

						<div class="col-auto">
							<a id="sidepanel-toggler" class="sidepanel-toggler d-inline-block d-xl-none" href="#">
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img">
									<title>Menu</title>
									<path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"
										d="M4 7h22M4 15h22M4 23h22"></path>
								</svg>
							</a>
						</div><!--//col-->

						<div class="app-utilities col-auto">
							<h3 class="text-danger">ครัวไทยโฮมเมด</h3>
						</div>
					</div><!--//row-->
				</div><!--//app-header-content-->
			</div><!--//container-fluid-->
		</div><!--//app-header-inner-->


		<div id="app-sidepanel" class="app-sidepanel">
			<div id="sidepanel-drop" class="sidepanel-drop"></div>
			<div class="sidepanel-inner d-flex flex-column">
				<a href="#" id="sidepanel-close" class="sidepanel-close d-xl-none">&times;</a>
				<div class="app-branding">
					<a class="app-logo" href="index.html"><img class="logo-icon me-2" src="assets/images/app-logo.svg"
							alt="logo"><span class="logo-text">Hackathon v1</span></a>
				</div><!--//app-branding-->

				<nav id="app-nav-main" class="app-nav app-nav-main flex-grow-1">
					<ul class="app-menu list-unstyled accordion" id="menu-accordion">

						<li class="nav-item">
							<a class="nav-link" href="dashboard.html">
								<span class="nav-icon">
									<i class="fa-solid fa-house-chimney"></i>
								</span>
								<span class="nav-link-text">Dashboard</span>
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link" href="food.html">
								<span class="nav-icon">
									<i class="fa-solid fa-utensils"></i>
								</span>
								<span class="nav-link-text">Food</span>
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link" href="about.html">
								<span class="nav-icon">
									<i class="fa-solid fa-address-card"></i>
								</span>
								<span class="nav-link-text">เกี่ยวกับเรา</span>
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link" href="item.html">
								<span class="nav-icon">
									<i class="fa-solid fa-address-card"></i>
								</span>
								<span class="nav-link-text">รายการอาหาร</span>
							</a>
						</li>

					</ul>
				</nav>

			</div>
		</div>
	</header>
    `
	}
}

customElements.define(`my-header`, MyHeader)