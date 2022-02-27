import React from 'react'

function Navbar() {
    return (
        <>
            <div class="navbar">
                <div class="navbar-container">
                    <div class="logo-container">
                        <h1 class="logo">flakes</h1>
                    </div>
                    <div class="menu-container">
                        <ul class="menu-list">
                            <a href="" class="menu-list-item active">Home</a>
                            <a href="/movie" class="menu-list-item">Movies</a>
                            <a href="" class="menu-list-item">Series</a>
                            <a href="" class="menu-list-item">Popular</a>
                            <a href="" class="menu-list-item">Trends</a>
                        </ul>
                    </div>
                    <div class="profile-container">
                        <div class="toggle">
                            <i class="fas fa-moon toggle-icon"></i>
                            <i class="fas fa-sun toggle-icon"></i>
                            <div class="toggle-ball"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar