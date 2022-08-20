import styled from "styled-components";
const Dropdown = () => {
    const List = styled.a`
    display: block;
    color: rgb(0 0 0);
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;
    cursor: pointer;
    &:hover {
        color: rgb(249 115 22);
    }
    `;

    const Names = styled.a`
    border-width: 2px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border-color: transparent;
    &:hover {
        border-color: rgb(248 250 252);
    }
    border-radius: 9999px;
    `;
    return (
        <ul class="w-full flex space-x-24">

            <li class="group  relative dropdown  px-4 text-white cursor-pointer font-semibold  uppercase tracking-wider text-xs">
                <Names>HOME</Names>
                <div class="group-hover:block dropdown-menu absolute hidden h-auto pt-4">

                    <ul class="top-0 w-48 bg-white shadow px-4 py-4 ">
                        <li class="py-3"><List>HOME</List></li>
                        <li class="py-3"><List>CREATIVE HOME</List></li>
                        <li class="py-3"><List>MINIMAL HOME</List></li>
                        <li class="py-3"><List>INTERACTIVE HOME</List></li>
                        <li class="py-3"><List>CLEAN HOME</List></li>
                    </ul>
                </div>
            </li>

            <li class="group  relative dropdown  px-4 text-white cursor-pointer font-semibold  uppercase tracking-wider text-xs">
                <Names>PAGES</Names>
                <div class="group-hover:block dropdown-menu absolute hidden h-auto pt-4">

                    <ul class="top-0 w-48 bg-white shadow px-4 py-4">
                        <li class="py-3"><List>HOME</List></li>
                        <li class="py-3"><List>CREATIVE HOME</List></li>
                        <li class="py-3"><List>MINIMAL HOME</List></li>
                        <li class="py-3"><List>INTERACTIVE HOME</List></li>
                        <li class="py-3"><List>clean HOME</List></li>
                    </ul>
                </div>
            </li>

            <li class="group  relative dropdown  px-4 text-white cursor-pointer font-semibold  uppercase tracking-wider text-xs">
                <Names>WORK</Names>
                <div class="group-hover:block dropdown-menu absolute hidden h-auto pt-4">

                    <ul class="top-0 w-48 bg-white shadow px-4 py-4">
                        <li class="py-3"><List>HOME</List></li>
                        <li class="py-3"><List>CREATIVE HOME</List></li>
                        <li class="py-3"><List>MINIMAL HOME</List></li>
                        <li class="py-3"><List>INTERACTIVE HOME</List></li>
                        <li class="py-3"><List>CLEAN HOME</List></li>
                    </ul>
                </div>
            </li>

            <li class="group  relative dropdown  px-4 text-white cursor-pointer font-semibold  uppercase tracking-wider text-xs">
                <Names>BLOG</Names>
                <div class="group-hover:block dropdown-menu absolute hidden h-auto pt-4">

                    <ul class="top-0 w-48 bg-white shadow px-4 py-4">
                        <li class="py-3"><List>HOME</List></li>
                        <li class="py-3"><List>CREATIVE HOME</List></li>
                        <li class="py-3"><List>MINIMAL HOME</List></li>
                        <li class="py-3"><List>INTERACTIVE HOME</List></li>
                        <li class="py-3"><List>CLEAN HOME</List></li>
                    </ul>
                </div>
            </li>

            <li class="group  relative dropdown  px-4 text-white cursor-pointer font-semibold  uppercase tracking-wider text-xs">
                <Names>FEATURES</Names>
                <div class="group-hover:block dropdown-menu absolute hidden h-auto pt-4">

                    <ul class="top-0 w-48 bg-white shadow px-4 py-4">
                        <li class="py-3"><List>HOME</List></li>
                        <li class="py-3"><List>CREATIVE HOME</List></li>
                        <li class="py-3"><List>MINIMAL HOME</List></li>
                        <li class="py-3"><List>INTERACTIVE HOME</List></li>
                        <li class="py-3"><List>CLEAN HOME</List></li>
                    </ul>
                </div>
            </li>
        </ul>
    );
};

export default Dropdown;