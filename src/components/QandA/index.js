import './style.scss';

const QandA = ({ question, answer }) => {
    return (
        <div className='q-and-a-container'>
            <div className='question'>{question}</div>
            <p className='answer'>{answer}</p>
        </div>
    );
};

export default QandA;
