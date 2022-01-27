import QandA from 'components/QandA';
import QandAData from 'utils/q-and-a.json';
import './style.scss';

const About = () => {
    return (
        <div className='about-layout'>
            {
                QandAData.map(({ question, answer, link }, index) => (
                    <QandA
                        key={index}
                        question={question}
                        answer={answer}
                        link={link}
                    />
                ))
            }
        </div>
    );
};

export default About;
