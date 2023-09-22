import classes from "./Footer.module.css";

function Footer() {
    const year = new Date().getFullYear();

    return(
        <footer className={classes.footer}>
            <p>Copyright Jake Betts {year}</p>
        </footer>
    );
}

export default Footer;
