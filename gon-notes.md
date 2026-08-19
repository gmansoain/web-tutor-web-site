- why the reset is done including :before and ::after?
```
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

- why do we need display: inline-block for the buttons?



    <nav class="nav-bar">
        <div class="container-lg nav-bar--flex">
            <a href="#"><img src="images/logo.svg" alt="logo"></a>
            <!-- Desktop Menu -->
            <ul class="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="#chapters">Chapters</a></li>
                <li><a href="#summary">Summary</a></li>
                <li><a href="#takeaways">Takeaways</a></li>
                <li><a href="#author">Author</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#"><i class="nav-bar--icon fa-brands fa-facebook"></i></a></li>
                <li><a href="#"><i class="nav-bar--icon fa-brands fa-twitter"></i></a></li>
            </ul>
            <!-- Mobile Menu -->
            <div class="mobile-menu">
                <!-- Hamburger button -->
                <div class="mobile-menu-toggle">
                    <i class="mobile-menu-icon fa-solid fa-bars"></i>
                </div>
                <ul class="mobile-menu-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#chapters">Chapters</a></li>
                    <li><a href="#summary">Summary</a></li>
                    <li><a href="#takeaways">Takeaways</a></li>
                    <li><a href="#author">Author</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#"><i class="nav-bar--icon fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i class="nav-bar--icon fa-brands fa-twitter"></i></a></li>
                </ul>
             </div>
        </div>
    </nav>