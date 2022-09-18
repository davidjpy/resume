import './Content.css';

const Content = () => {
    return (
        <div className='content'>
            <div>
                <h1 className='content__text'>Ho Chi Hang</h1>
            </div>
            <div>
                <h3 className='content__text content__text--title'>WORK EXPERIENCE</h3>
                <div className='content__divider' />
                <div className='content__row-wrapper' style={{ paddingTop: 0 }}>
                    <div style={{ display: 'flex' }}>
                        <h5 className='content__text content__text--subtitle' style={{ flex: 4 }}>Assistant Building Surveyor</h5>
                        <p style={{ flex: 2.2, textAlign: 'start' }} className='content__text content__text--body'>July 2021 - January 2022</p>
                    </div>
                    <p className='content__text content__text--body'>Easy Living Consultants Limited</p>
                    <ul className='content__list'>
                        <li className='content__text content__text--body'>Specialize in preparation of building plans, such as AutoCAD drawing for various addition & alteration and lifts project for local schools</li>
                        <li className='content__text content__text--body'>Study different aspects of building control and design patterns behind the project and investigated in client’s preferences and potential solutions to problems</li>
                    </ul>
                </div>
                <div>
                    <div style={{ display: 'flex' }}>
                        <h5 className='content__text content__text--subtitle' style={{ flex: 4 }}>Research Assistant</h5>
                        <p className='content__text content__text--body' style={{ flex: 2.2, textAlign: 'start' }}>January 2021 - Present</p>
                    </div>
                    <p className='content__text content__text--body'>Hong Kong Industrial Artificial Intelligence and Robotics Centre</p>
                    <ul className='content__list'>
                        <li className='content__text content__text--body'>Design and implement web-based solutions and develop dashboards with modern frameworks, including MERN stack, Django and SQL database for local corporations, such as MTR, Hactl and Protechnic</li>
                        <li className='content__text content__text--body'>Perform code review and handle merge requests regularly for team members' work according to the company's internal code guide</li>
                        <li className='content__text content__text--body'>Setup IoT devices and secure network connection and data transfer between the IoT devices and the server and the database</li>
                    </ul>
                </div>
            </div>
            <div>
                <h3 className='content__text content__text--title'>EDUCATION</h3>
                <div className='content__divider' />
                <div className='content__row-wrapper' style={{ paddingTop: 0 }}>
                    <h5 className='content__text content__text--subtitle'>Bachelor of Science (Honors) in Surveying</h5>
                    <div style={{ display: 'flex' }}>
                        <p className='content__text content__text--body' style={{ flex: 1 }}>The Hong Kong Polytechnic University</p>
                        <p className='content__text content__text--body'>2019 - 2021</p>
                    </div>
                    <p className='content__text content__text--body content__text--focus'>Second Class Honours, Division 1</p>
                    <p className='content__text content__text--body'>Grade Point Average: 3.47</p>
                </div>
                <div className='content__row-wrapper' style={{ paddingTop: 0 }}>
                    <h5 className='content__text content__text--subtitle'>Higher Diploma in Building Technology and Management (Surveying)</h5>
                    <div style={{ display: 'flex' }}>
                        <p className='content__text content__text--body' style={{ flex: 1 }}>The Hong Kong Polytechnic University</p>
                        <p className='content__text content__text--body'>2017 - 2019</p>
                    </div>
                    <p className='content__text content__text--body'>Grade Point Average: 3.37</p>
                </div>
            </div>
        </div>
    );
}

export default Content;