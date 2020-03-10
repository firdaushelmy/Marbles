import React from "react";
import { Button } from "react-bootstrap"

function Navbar() {
    return (
        <>
            <Button class="navbar-toggler navbar-toggler-left rounded-0 border-0" type="button" data-toggle="collapse" data-target="#megamenu-dropdown" aria-controls="megamenu-dropdown" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i><span class="ml-3"></span>
            </Button>
        </>
    )

}

export default Navbar;