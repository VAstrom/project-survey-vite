
const journeys = ["eerie shadows", "mysterious forms", "ghostly shapes"]

export const JourneyMood = ({ updateFormData, value }) => {

    // const [journey, setJourney] = useState('');
    const journeyMoodChoice = (event) => updateFormData("journeyMood", event.target.value)

    return (
        <span>
            <form className="journey-form">
                {journeys.map((journeyChoice) => (
                    <label key={journeyChoice}>
                        <input
                            type="radio"
                            value={journeyChoice}
                            onChange={journeyMoodChoice}
                            checked={value === journeyChoice}
                        />
                        {journeyChoice}
                    </label>
                ))}
            </form>
        </span>
    );
}
