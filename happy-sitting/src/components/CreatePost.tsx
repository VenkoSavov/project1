import React from "react";
import { userParent } from "../model/parent.model";
import "./CreatePost.css";

type PostListener = {
  (post: userParent): void;
};

interface Props {
  post: userParent;
  onCreate: PostListener;
}

interface StringMap {
  [key: string]: string;
}

interface State {
  fields: StringMap;
}

export default class CreatePost extends React.Component<Props, State> {
  state = {
    fields: {
      fName: "",
      lName: "",
      date: "",
      timeFrom: "",
      timeTo: "",
      kidName: "",
      kidAge: "",
      imageUrl: "",
    },
  };
  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="fName">First name: </label>
          <input
            type="text"
            id="firstname"
            name="fName"
            placeholder="Enter first name..."
            value={this.state.fields.fName}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lName">Last name: </label>
          <input
            type="text"
            id="lastname"
            name="lName"
            placeholder="Enter last name..."
            value={this.state.fields.lName}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date (dd/mm/yyyy): </label>
          <input
            type="text"
            id="date"
            name="date"
            placeholder="Enter date..."
            value={this.state.fields.date}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="timeFrom">From (hour): </label>
          <input
            type="text"
            id="timeFrom"
            name="timeFrom"
            placeholder="From..."
            value={this.state.fields.timeFrom}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="timeTo">To (hour): </label>
          <input
            type="text"
            id="timeTo"
            name="timeTo"
            placeholder="To..."
            value={this.state.fields.timeTo}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="kidName">Kid's name: </label>
          <input
            type="text"
            id="kidName"
            name="kidName"
            placeholder="Enter kid name..."
            value={this.state.fields.kidName}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="kidAge">Kid's age: </label>
          <input
            type="text"
            id="kidAge"
            name="kidAge"
            placeholder="Enter kid's age..."
            value={this.state.fields.kidAge}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Picture URL of kid: </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Enter URL..."
            value={this.state.fields.imageUrl}
            onChange={this.handleChange}
            required
          />
        </div>

        <button type="submit">Create Post</button>
        <button type="reset" onClick={this.handleReset}>
          Reset
        </button>
      </form>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    this.setState(({ fields }) => ({
      fields: { ...fields, [event.target.name]: event.target.value },
    }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onCreate(({ ...this.state.fields } as unknown) as userParent);
    this.reset();
  };

  handleReset = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    this.reset();
  };

  private reset() {
    this.setState({
      fields: {
        fName: "",
        lName: "",
        date: "",
        timeFrom: "",
        timeTo: "",
        kidName: "",
        kidAge: "",
        imageUrl: "",
      },
    });
  }
}
