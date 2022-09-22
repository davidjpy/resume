import './Leftbar.css';
import { IoMdMail } from 'react-icons/io';
import {
    FaPhoneSquareAlt,
    FaLinkedin,
    FaGithubSquare,
    FaExternalLinkSquareAlt
} from 'react-icons/fa';

const Leftbar = () => {

    return (
        <div className='leftbar__leftbar'>
            <div>
                <h3 className='leftbar__text leftbar__text--title' style={{ paddingTop: 0 }}>ABOUT ME</h3>
                <div className='leftbar__divider' />
                <p className='leftbar__text leftbar__text--body'>
                    Dedicated and self-driven web developer with expertise in producing optimal web-based solutions for a range of sectors. This includes building reusable functions, optimising application performance, and debugging tricky problems
                </p>
            </div>
            <div>
                <h3 className='leftbar__text leftbar__text--title'>CONTACT</h3>
                <div className='leftbar__divider' />
                <ul className='leftbar__list'>
                    <li className='leftbar__text leftbar__text--body'>
                        <IoMdMail className='leftbar__icon' />
                        david1999.hch@gmail.com
                    </li>
                    <li className='leftbar__text leftbar__text--body'>
                        <FaPhoneSquareAlt className='leftbar__icon' />
                        +852 9160 7535
                    </li>
                    <li className='leftbar__text leftbar__text--body'>
                        <FaLinkedin className='leftbar__icon' />
                        linkedin.com/in/davidho-web/
                    </li>
                    <li className='leftbar__text leftbar__text--body'>
                        <FaGithubSquare className='leftbar__icon' />
                        github.com/davidjpy/
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='leftbar__text leftbar__text--title'>SKILLS</h3>
                <div className='leftbar__divider' />
                <ul className='leftbar__list'>
                    <li className='leftbar__text leftbar__text--body'>
                        JavaScript / TypeScript
                    </li>
                    <li className='leftbar__text leftbar__text--body'>
                        Python
                    </li>
                    <li className='leftbar__text leftbar__text--body'>
                        React.js / Express.js / Node.js
                    </li>
                    <li className='leftbar__text leftbar__text--body'>
                        MongoDB / Postgresql
                    </li>
                    <li className='leftbar__text leftbar__text--body'>
                        Django
                    </li>
                    <li className='leftbar__text leftbar__text--body'>
                        Git
                    </li>
                    <li className='leftbar__text leftbar__text--body'>
                        Amazon Web Services
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='leftbar__text leftbar__text--title'>LANGUAGE</h3>
                <div className='leftbar__divider' />
                <ul className='leftbar__list'>
                    <li className='leftbar__text leftbar__text--body'>
                        English
                    </li>
                    <li className='leftbar__text leftbar__text--body'>
                        Cantonese
                    </li>
                    <li className='leftbar__text leftbar__text--body'>
                        Mandarin
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='leftbar__text leftbar__text--title'>PROJECTS</h3>
                <div className='leftbar__divider' />
                <ul className='leftbar__list'>
                    <h5 className='leftbar__text leftbar__text--body'>WildBear</h5>
                    <li className='leftbar__text leftbar__text--body'>
                        <FaGithubSquare className='leftbar__icon' />
                        github.com/davidjpy/e-commerce/
                    </li>
                    <li className='leftbar__text leftbar__text--body'>
                        <FaExternalLinkSquareAlt className='leftbar__icon' />
                        wildbear-shop.com/
                    </li>
                    <h5 className='leftbar__text leftbar__text--body'>J-Travel</h5>
                    <li className='leftbar__text leftbar__text--body'>
                        <FaGithubSquare className='leftbar__icon' />
                        github.com/davidjpy/jtravel/
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Leftbar;