import img from '../img/arr2.png';
import Wrapper from './Helper/Wrapper';

const Arrow = () => {
    return (
        <Wrapper>
            <div class="container +py-9 flex flex-col mt-9 pt-40">
                <div class="grid grid-cols-3 gap-x-14 md:gap-x-64">
                    <div class="col-start-1 text-white text-xs pl-10 md:pl-20 pt-9 font-normal">GOT AN IDEA?</div>
                    <div class="col-start-3 text-white text-xs px-9 pt-9 text-right font-normal">LOCATED IN <br />PARIS,
                        FRANCE.🇫🇷</div>
                </div>
            </div>

            <div class="items-center justify-between mt-9 pt-9">
                <div class="grid grid-cols-3 gap-x-64">
                    <div class="col-start-2 md:col-start-1 pl-20 ml-9">
                        <a href="#">
                            <img src={img} />
                        </a>
                    </div>
                    <div class="col-start-1 md:col-start-2 col-span-2 text-white text-3xl md:text-7xl tracking-wider font-medium pr-20 py-9 mr-9 px-2">LET'S <br /> DISCUSS IT</div>
                    <div class="col-start-2 col-span-2 font-medium pr-20 py-9 mr-9">
                        <a class="border border-orange-500 rounded-full hover:bg-orange-500 text-white p-4 bg-transparent" href="#">See Projects</a>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Arrow;
