# nginx-cache

This project demonstartes caching mechanism only for pivotal cloud foundry where only one api at a time is  cached in and other apis would fetch real time data.

To test caching in pcf also deploy the other node js app node-nginx-cache-test into pcf .The node js app has two api /notify/all which is cached by nginx and /notify/{user} which shows real time data 
