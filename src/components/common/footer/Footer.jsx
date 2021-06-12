import moment from 'moment';
import '../../../styles/_components/footer.css';

export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <h3>Templeton Foundation</h3>
                <p>
                    Philosophy of Science Group, National Concil for Scientific and Technical Research (CONICET)
                </p>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy; {moment().year()}  Templeton Foundation. designed by <span>Jonathan Ybarra</span></p>
            </div>
        </footer>
    )
}
