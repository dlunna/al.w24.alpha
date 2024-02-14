<template>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <RouterLink to="/"><font-awesome-icon :icon="['fas', 'home']" /></RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <!--<li class="nav-item"><RouterLink to="/">Home</RouterLink></li>-->
                         <!--<li class="nav-item"><RouterLink to="/acercade">Acerca de</RouterLink></li>-->
                        <!--<li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                        <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>-->
                        <li class="nav-item"><RouterLink to="/contacto">Contacto</RouterLink></li>
                    </ul>
                </div>
            </div>
        </nav>
</template>