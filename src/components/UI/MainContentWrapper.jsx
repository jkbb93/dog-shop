import Card from "./Card";

function MainContentWrapper(props) {
    return (
            <Card>
                <main>
                    {props.children}
                </main>
            </Card>
    );
}

export default MainContentWrapper;