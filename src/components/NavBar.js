// Nav Bar
const NavBar = () => {
    return (
<div class="nav-wrapper">
        <div class="nav-sectionTitle">
            <h1>Udemy</h1>
        </div>
        <div class="menu-bar"><i class="fa-solid fa-bars"></i></div>
        <div class="nav-sectionleft">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search...." />
        </div>
        <div class="nav-sectionRight">
            <p>Course</p>
            <div class="learning">
                <p>My Learning</p>
                <div class="learning-popup">
                    <p>You did not anything purchase yet</p>
                </div>
            </div>
            
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-bell"></i>
            <i class="fa-solid fa-user"></i>
        </div>
    </div>
    )
}
    

    export default NavBar