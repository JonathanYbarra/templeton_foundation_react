import { bodyValues } from "../../core/services/referedPublications";

export const ReferedPublications = () => {
    return (
        <div className="d-flex justify-content-center align-items-center mt-5 minHeight-70 container">
            <div>
                {
                    bodyValues.map(({ key, marginTop, boldText, text }) =>
                        <p className={marginTop} key={key}>
                            <b>{boldText}</b> {text}
                        </p>
                    )
                }
            </div>
        </div>
    )
}
