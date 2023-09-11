import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer rkPnix5gYW3xuizQ4Dq9sn7j17qRvYAS5DqedoVd02QvecubNMv2OYsfupu4KuqQdg9U1Rb5bB9RvV12hg5dS8NqgDjZ9h-6l7ZQ2AIz32JYKIxtVAylw0Qo4zfzZHYx",
  },
});
