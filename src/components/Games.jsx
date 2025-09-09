
export default function Games() {
    return (
        <div className="projects-container basic-container">
            <h2>Games</h2>

            <div className="games-container">
                <iframe
                    src="./games/pong/index.html"
                    width="1200"
                    height="720"
                    style={{
                        border: "none",
                    }}
                    scrolling="no"
                    title="Pong Game"
                />
            </div>
        </div>
    );
}