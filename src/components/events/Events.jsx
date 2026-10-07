import "./Events.css";
import { events } from "../../assets/databases/events/events.js";

export const Events = () => {
  return (
    <section className="events-section">
      <h2 className="section-title">Eventos</h2>

      {events.map((event) => (
        <div className="event-poster" key={event.id}>
          <img src={event.image} alt={event.imageAlt} className="event-image" />

          <div className="event-info">
            <p>{event.description}</p>

            <p>
              {event.featured.text}{" "}
              {event.featured.links.map((link) => (
                <a
                  key={link.label}
                  className="event-link"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </p>

            <ul>
              {event.activities.map((activity) => (
                <li key={activity.text}>
                  {activity.icon} {activity.text}{" "}
                  {activity.links.map((link, index) => (
                    <span key={link.label}>
                      {index > 0 && " · "}

                      <a
                        className="event-link"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    </span>
                  ))}
                </li>
              ))}
            </ul>

            <div className="event-details">
              {event.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>

            <p className="event-closing">
              {event.closing.map((text) => (
                <span key={text}>
                  {text}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};
