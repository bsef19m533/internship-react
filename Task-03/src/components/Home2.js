import Cases from "./Cases";
const Home2 = () => {
    return (
        <div>
            <div class="container py-6 flex flex-col items-center pt-9 px-6 mx-auto space-y-0">
                <div class="text-orange-400 text-xs pt-6 font-medium">
                    PORTFOLIO
                </div>
                <div class="text-white text-7xl pt-5 tracking-wider font-medium">
                    OUR CASES
                </div>
            </div>
            <Cases />
        </div>
    );
};

export default Home2;