import './Leftbar.css';
import { IoMdMail } from 'react-icons/io';
import {
    FaPhoneSquareAlt,
    FaLinkedin,
    FaGithubSquare
} from 'react-icons/fa';

const Leftbar = () => {

    return (
        <div className='leftbar__leftbar'>
            <div>
                <h3 className='leftbar__text leftbar__text--title' style={{ paddingTop: 0 }}>ABOUT ME</h3>
                <div className='leftbar__divider' />
                <p className='leftbar__text leftbar__text--body'>
                    Passionate and self-motivated web developer with experience in delivering optimized web-based solutions across diverse industries, including creating reusable functions, optimizing application performance and troubleshooting complex issues. Also, a progressive learner and team player with an ambition to become a full-stack developer.
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
                        JavaScript
                    </li>
                    <li className='leftbar__text leftbar__text--body'>
                        Python
                    </li>
                    <li className='leftbar__text leftbar__text--body'>
                        React.js / Express.js / Node.js
                    </li>
                    <li className='leftbar__text leftbar__text--body'>
                        MongoDB
                    </li>
                    <li className='leftbar__text leftbar__text--body'>
                        Django
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
        </div>
    );
}

export default Leftbar;