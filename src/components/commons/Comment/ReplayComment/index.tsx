const ReplayCommentList = ({ replaycomment }: any) => {
  console.log(replaycomment);

  return (
    <div style={{ width: '80%', marginLeft: '40px' }}>
      {replaycomment?.map((replaycomment: any) => (
        <div key={replaycomment.id}>
          <p>Author: {replaycomment.author}</p>
          <p>Content: {replaycomment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ReplayCommentList;
