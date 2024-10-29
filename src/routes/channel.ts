
import redis from 'redis'

const client = redis.createClient();
client.connect();
 
client.on("error", (error) => {
    console.error(error);
});
 
 async function publish(channel, value) {
    return client.publish(channel, JSON.stringify(value));

}
 
async function subscribe(channelSubscribed, callback) {
    client.subscribe(channelSubscribed, (channel, message) => {
        callback(message);
    });
}
 
