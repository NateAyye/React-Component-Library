import {StyledButton} from "./Button.styles";
import {useRouter} from 'next/router'


import React, { useEffect, useState } from "react";

/**
 Props:
 - color = any built in html color will work and will change the background color of the main element * also will
 automatically change the foreground color to the respective contrasted color.
 (i.e. color={'white'} means the foreground will be black to allow for easy reading)
 - glow = Turns the button into a neon sign version of the button with hover effects.
 - activated = turns the button into one that keeps a bottom border when clicked on, but it doesn't keep it when
 clicked off if you want it to keep the border persistent then the href value of the button will tell it to
 keep the border when it's on that route.
 **/
function Button(props) {
    const router = useRouter();
    const [color, setColor] = useState("#000000");
    useEffect(() => setColor(props.color), [])

    // * Adding an event listener on click to add a span that expands and removes itself after 1s

    if (typeof document !== "undefined") {
        const buttons = document.querySelectorAll("#btn-default");
        buttons.forEach((btn) => {

            // * Adding an event listener on click to add a span that expands and removes
            btn.addEventListener("click", (e) => {

                // * Get the Element that has the active attribute

                const activeButton = document.querySelector("[active]");

                // * grab the x and y position of the mouse click for the ripple effect
                let x = e.clientX - e.target.offsetLeft;
                let y = e.clientY - e.target.offsetTop;

                // * if there is an active button then toggle the active attribute
                if (activeButton) {
                    activeButton.toggleAttribute("active", false);
                }

                btn.toggleAttribute("active", true);

                let ripples = document.createElement("span");
                ripples.style.left = x + "px";
                ripples.style.top = y + "px";
                if (!btn.querySelector("span")) {
                    btn.appendChild(ripples);
                }

                // * setting the timeout for the ripple
                setTimeout(() => {
                    ripples.remove();
                }, 700);
            });
        });
    }

    // ? The component Actually rendered to the page
    return (
        // * Passing the props down th the component, so you can attach all the normal attribute's a link may have
        <StyledButton route={router.asPath} fgcolor={color} {...props}>
            <p>{props.children}</p>
        </StyledButton>
    );
}

export default Button;
