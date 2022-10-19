/* eslint-disable quotes */
class Magazine {
  constructor() {
    this.states = [
      new ReadyForPushNotification(),
      new ReadyForApprove(),
      new ReadyForPublish(),
      new PublishInProgress()
    ];
    this.current = this.states[0];
    this.staff = [];
    this.articles = new Map();
    this.followers = [];
  }
  changeState() {
    const total = this.states.length;
    let index = this.states.findIndex((state) => state === this.current);
    if (index + 1 < total) {
      this.current = this.states[index + 1];
    } else {
      this.current = this.states[0];
    }
  }
  addArticle(article) {
    this.articles.set(article, "");
  }
  addStaff(employee) {
    this.staff.push(employee);
  }
  addFollower(follower) {
    this.followers.push(follower);
  }
  approve(name) {
    let count = 0;
    this.articles.forEach((value) => {
      for (let i = 0; i < value.length; i++) {
        count++;
      }
    });
    if (count < Number('5')) {
      this.current.approve(name);
    } else {
      this.changeState();
      this.current.approve(name);
    }
  }
  publish(name) {
    if (this.current.state === "ReadyForPublish") {
      this.current.publish(name);
      this.changeState();
      this.sendNotifications();
      this.changeStateAfterPublishing()
    } else {
      this.current.publish(name);
    }
  }

  sendNotifications() {
    this.followers.forEach((follower) => {
      for (let i = 0; i < follower.subscribedArticles.length; i++) {
        const element1 = follower.subscribedArticles[i];
        follower.onUpdate(this.articles.get(element1));
      }
    });
  }
  changeStateAfterPublishing() {
    setTimeout(() => {
      this.changeState();
    }, Number('60000'));
  }
}
class MagazineEmployee {
  constructor(name, type, magazine) {
    this.name = name;
    this.type = type;
    this.magazine = magazine;
    this.changes = [];
    magazine.addArticle(type);
    magazine.addStaff(name);
  }
  addArticle(article) {
    this.changes.push(article);
    this.magazine.articles.set(this.type, this.changes);
    let count = 0;
    this.magazine.articles.forEach((value) => {
      for (let i = 0; i < value.length; i++) {
        count++;
      }
    });
    if (count >= Number('5')) {
      this.magazine.changeState();
    }
  }
  approve() {
    if (this.type === "manager") {
      this.magazine.approve(this.name);
    } else {
      console.log("you do not have permissions to do it");
    }
  }
  publish() {
    this.magazine.publish(this.name);
  }
}
class State {
  constructor(state) {
    this.state = state;
  }
}
class ReadyForPushNotification extends State {
  constructor() {
    super("ReadyForPushNotification");
  }
  publish(name) {
    console.log(
      `Hello ${name}. You can't publish. We are creating publications now.`
    );
  }
  approve(name) {
    console.log(
      `Hello ${name}. You can't approve. We don't have enough of publications.`
    );
  }
}
class ReadyForApprove extends State {
  constructor() {
    super("ReadyForApprove");
  }
  publish(name) {
    console.log(
      `Hello ${name} You can't publish. We don't have a manager's approval.`
    );
  }
  approve(name) {
    console.log(`Hello ${name} You've approved the changes`);
  }
}
class ReadyForPublish extends State {
  constructor() {
    super("ReadyForPublish");
  }
  publish(name) {
    console.log(`Hello ${name} You've recently published publications.`);
  }
  approve(name) {
    console.log(
      `Hello ${name} Publications have been already approved by you.`
    );
  }
}
class PublishInProgress extends State {
  constructor() {
    super("PublishInProgress");
  }
  publish(name) {
    console.log(
      `Hello ${name}. While we are publishing we can't do any actions.`
    );
  }
  approve(name) {
    console.log(
      `Hello ${name}. While we are publishing we can't do any actions.`
    );
  }
}
class Follower {
  constructor(name) {
    this.name = name;
    this.subscribedArticles = [];
  }
  subscribeTo(magazine, nameArticles) {
    let followerIsExist = false;
    magazine.followers.forEach(follower => {
      if (follower.name === this.name) {
        followerIsExist = true;
      }
    });
    if (followerIsExist === false) {
      this.subscribedArticles.push(nameArticles);
      magazine.addFollower(this);
    } else {
      this.subscribedArticles.push(nameArticles);
    }
  }
  unsubscribe(magazine, type) {
    this.subscribedArticles = this.subscribedArticles.filter(fill => fill !== type)
  }
  onUpdate(date) {
    console.log(date + " " + this.name);
  }
}