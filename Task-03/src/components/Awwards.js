import Wrapper from "./Helper/Wrapper";
const Awwards = () => {
    return (
        <Wrapper>
            <div class="container py-9 flex flex-col items-center my-9 mt-9">
                <div
                    class="border border-orange-500 rounded-full bg-orange-500 text-white p-4 hover:bg-transparent hover:text-orange-500">
                    <a href="#">See Projects</a>
                </div>
            </div>

            <div class="container py-9 flex flex-col mt-9">
                <div class="mx-9 px-9 py-9 my-9">
                    <div class="text-orange-400 text-xs pt-6 font-medium">
                        SERVICES
                    </div>
                    <div class="text-white text-7xl pt-5 tracking-wider font-medium">
                        OUR AWARDS
                    </div>
                </div>
            </div>

            <div class="container py-1 flex flex-col text-white md:items-end items-start pr-9">
                <div class="grid grid-cols-3 gap-x-32 md:gap-x-64 border-t ">
                    <div class="col-start-1 col-span-3 text-2xl md:text-3xl font-normal p-4 ">Awwwards <p
                        class="text-xs inline pl-2 pr-8 mr-9"> (SITE OF THE DAY)</p>
                    </div>
                    <div class="col-start-4 p-4 text-2xl">2022</div>
                </div>

                <div class="grid grid-cols-3 gap-x-32 md:gap-x-64 border-t border-b">
                    <div class="col-start-1 col-span-3 text-2xl md:text-3xl font-normal p-4 ">Lapa ninja <p
                        class="text-xs inline pl-2 pr-9 mr-9"> (SITE OF THE DAY)</p>
                    </div>
                    <div class="col-start-4 p-4 text-2xl">2022</div>
                </div>

                <div class="grid grid-cols-3 gap-x-32 md:gap-x-64">
                    <div class="col-start-1 col-span-3 text-2xl md:text-3xl font-normal p-4">Red Inspire Site <p
                        class="text-xs inline ml-2 mr-1"> (SITE OF THE DAY)</p>
                    </div>
                    <div class="col-start-4 p-4 text-2xl">2022</div>
                </div>

                <div class="grid grid-cols-3 gap-x-32 md:gap-x-64 border-t border-b">
                    <div class="col-start-1 col-span-3 text-2xl md:text-3xl font-normal p-4">Lapa ninja <p
                        class="text-xs inline pl-2 pr-9 mr-9"> (SITE OF THE DAY)</p>
                    </div>
                    <div class="col-start-4 p-4 text-2xl">2022</div>
                </div>


            </div>
        </Wrapper>
    );

};

export default Awwards;