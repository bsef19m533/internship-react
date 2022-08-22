import img from '../img/one.jpg';
import img2 from '../img/two.jpg';
import img3 from '../img/three.jpg';
import img4 from '../img/four.jpg';
import img5 from '../img/five.jpg';
import img6 from '../img/six.jpg';
import styled from 'styled-components';
import Wrapper from './Helper/Wrapper';
const Cases = () => {
    const BorderedText = styled.a`
    border-width: 1px;
    border-color: rgb(255 255 255);
    border-radius: 9999px;
    color: rgb(255 255 255);
    font-size: 0.75rem; line-height: 1rem;
    padding-top: 0.125rem;
    padding-bottom: 0.125rem; 
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    `;
    const Text = styled.div`
    color: rgb(255 255 255);
    padding-top: 0.5rem;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem;
    `;
    return (
        <Wrapper>
            <div class="container py-6 flex flex-col md:flex-row items-center px-6 mx-auto space-y-0 md:space-y-0 space-x-9">
                <div>
                    <a href='#'> <img src={img} alt="one" style={{ width: 1200, height: 500 }}></img> </a>
                    <div class="mt-2 "><BorderedText>ART DIRECTION</BorderedText> </div>
                    <Text><a>Cha Cha Things</a></Text>
                </div>
                <div class="-mt-3">
                    <a href='#'> <img src={img2} alt="one" style={{ width: 1200, height: 500 }}></img> </a>
                    <div class="mt-2"><BorderedText>ANIMATION</BorderedText> </div>
                    <Text><a>Favourite December</a></Text>
                </div>
                <div>
                    <a href='#'> <img src={img3} alt="one" style={{ width: 1200, height: 500 }}></img> </a>
                    <div class="mt-2"><BorderedText>ART DIRECTION</BorderedText> </div>
                    <Text><a>Emotional Whispers</a></Text>
                </div>
            </div>
            <div class="container flex flex-col md:flex-row items-center pb-9 px-6 mx-auto mt-5 space-y-0 md:space-y-0 space-x-9">
                <div>
                    <a href='#'> <img src={img4} alt="one" style={{ width: 1200, height: 500 }}></img> </a>
                    <div class="mt-2"><BorderedText>ILLUSTRATION</BorderedText> </div>
                    <Text><a>Lovely Break-Up</a></Text>
                </div>
                <div class="-mt-3">

                    <a href='#'> <img src={img5} alt="one" style={{ width: 1200, height: 500 }}></img> </a>
                    <div class="mt-2"><BorderedText>ANIMATION</BorderedText> </div>
                    <Text><a>Pessimistic Roaring Flames</a></Text>
                </div>
                <div>
                    <a href='#'> <img src={img6} alt="one" style={{ width: 1200, height: 500 }}></img> </a>
                    <div class="mt-2"><BorderedText>ART DIRECTION</BorderedText> </div>
                    <Text><a>Be Calm With Acoustic</a></Text>
                </div>
            </div>
        </Wrapper>
    );
}

export default Cases;
