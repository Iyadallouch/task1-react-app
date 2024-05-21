import "./ComponentsStyle.css";

export default function Blog({ children }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 my-4 mx-4">
      <div className="col">
        <div className="card">
          <div className=" justify-content-center align-items-center d-flex mt-3">
            <img
              src="Arabic_music.jpg"
              className="img-size card-img-top"
              alt="Arabic music"
            />
          </div>
          <div className="card-body">
            <h3 className="card-title justify-content-center align-items-center d-flex">
              Iyad
            </h3>
            <h5 className="card-title justify-content-center align-items-center d-flex">
              Music
            </h5>
            <hr style={{ borderTop: "6px dotted teal" }}></hr>
            <p className="card-text">
              Arabic music, with its intricate maqamat and diverse genres,
              embodies a captivating blend of tradition and innovation. From the
              haunting melodies of Andalusian music to the pulsating rhythms of
              contemporary pop, Arabic music offers a rich tapestry of sounds
              that resonate with audiences worldwide. It serves as a cultural
              vessel, expressing themes of love, longing, and social commentary,
              while also embracing global influences and modern production
              techniques. Through its timeless melodies and evocative lyrics,
              Arabic music invites listeners on a journey of discovery, where
              the beauty of tradition meets the excitement of new musical
              horizons.
            </p>
            {children}
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className=" justify-content-center align-items-center d-flex mt-3">
            <img src="Art.jpg" class="card-img-top img-size" alt="Art" />
          </div>
          <div className="card-body">
            <h3 className="card-title justify-content-center align-items-center d-flex">
              Iyad
            </h3>
            <h5 className="card-title justify-content-center align-items-center d-flex">
              Art
            </h5>
            <hr style={{ borderTop: "6px dotted teal" }}></hr>
            <p className="card-text">
              Art, in its myriad forms, serves as a universal language that
              transcends boundaries and speaks to the essence of the human
              experience. Whether expressed through paint on canvas, sculpture
              in stone, or words on a page, art has the power to evoke emotions,
              provoke thought, and foster connection. It is a reflection of our
              collective imagination and a testament to the boundless creativity
              that defines humanity. From the ancient cave paintings of our
              ancestors to the avant-garde masterpieces of today, art continues
              to inspire, challenge, and unite us in a shared celebration of
              beauty and expression. Through its ability to capture the
              complexity of the human condition, art reminds us of our shared
              humanity and the profound connections that exist between us all.
            </p>
            {children}
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className=" justify-content-center align-items-center d-flex mt-3">
            <img src="Cars.jpg" class="card-img-top img-size" alt="Cars" />
          </div>
          <div className="card-body">
            <h3 className="card-title justify-content-center align-items-center d-flex">
              Iyad
            </h3>
            <h5 className="card-title justify-content-center align-items-center d-flex">
              Cars
            </h5>
            <hr style={{ borderTop: "6px dotted teal" }}></hr>
            <p className="card-text">
              Cars, more than mere machines, embody a potent blend of
              engineering marvel, aesthetic beauty, and cultural significance.
              From the roar of a powerful engine to the sleek lines of a classic
              design, cars ignite a passion that transcends generations and
              borders. They represent freedom, adventure, and the thrill of the
              open road, evoking a sense of exhilaration unlike any other mode
              of transportation. Whether admiring vintage classics or marveling
              at cutting-edge technology, the allure of cars lies in their
              ability to merge form and function, offering both practical
              utility and visceral excitement. In a world where mobility is key,
              cars symbolize not just transportation, but also aspiration,
              innovation, and the relentless pursuit of speed and style.
            </p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
