export class Comment{
    postId: number;
    id: number;
    email: string;
    body: string;

    constructor(
        postId: number,
        id: number,
        email: string,
        body: string)
         { 
      this.postId = postId;
      this.id= id;
      this.email= email;
      this.body= body;
    }
}
