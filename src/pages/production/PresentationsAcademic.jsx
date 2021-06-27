import { contentValues } from "../../core/services/presentationsAcademic"

export const PresentationsAcademic = () => {
    return (
        <div className="d-flex justify-content-center align-items-center mt-5 minHeight-70 container">
            <div>
                {
                    contentValues.map(({ text, marginTop, boldText, key }) =>
                        <p className={marginTop} key={key}>
                            <b>{boldText}</b>
                            {text}
                        </p>
                    )
                }
            </div>
        </div>
    )
}
