import QandA from 'components/QandA';
import QandAData from 'utils/q-and-a.json';
import './style.scss';

const About = () => {
    return (
        <div className='about-layout'>
            {
                QandAData.map(({ question, answer }) => (
                    <QandA
                        question={question}
                        answer={answer}
                    />
                ))
            }
        </div>
    );
};

export default About;
