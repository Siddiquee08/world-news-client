import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaStar } from "react-icons/fa";

const News = () => {
  const news = useLoaderData();
  const { title, details, image_url, author, rating, category_id } = news;
  console.log(news);
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="d-flex justify-content-between align-items-center">
            <div>
              <span className="font-weight-bold">Author</span>: {author.name}
            </div>
            <div>
              <span>Published Date:</span> {author.published_date}
            </div>
            <div>
              <FaStar className="text-warning"></FaStar> {rating.number}
            </div>
          </Card.Text>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="success">Category</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
