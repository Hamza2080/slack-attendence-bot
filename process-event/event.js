


process.on('slack event', slackNewMessageHandler);

const slackNewMessageHandler = async ( data ) => {
    console.log(data);
}