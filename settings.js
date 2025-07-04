require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAF2B5FoYDBxyVQQAAHAHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3ptYwS5E9ERC6hI24qCKLKxDwUUiGCBVeUFJ*z3DXR6eh52Z3t5KrIyMk+ec7K+A1wXFE1RC*TvoCHFGTLUHVnbIKAD85RliIAeSCGDQAfBcOvO1PI28*ej+c1fScbGe1syP1aHPIn3wsZRqoh3OW9dv4J7DzSnuCqS3xU82Ecx9K*C8HC9LlLbDOe+TyUuR01dXsyX8LYZrbSz97Y0XsG9qwgLUuB81OzQARFYTVG7gAX5GvypYZQYQsk1rn03SUMzJNuK7aGjrnZJvKosD+6rm8v1sfg1+LNhYGdovJitpZep914Hhii16tVNTINKmdEs27ii8Jz1*eUTPi1yjFInRZgVrP0y77Y5j5XpS9*KJlKmvail64lYXB8UOQ5D+SBsBFs7bk9JPOK+BrzdXuEGoXqwzt7GDRK2cWj767Oh5TE2uaS*aqnIHeU9ulx+Bb4gH14p*w*v9ohG9P1dTKmtOJs8DPf5NDd3btssaWmk681+gD3ZWBEh+Bp8+y1WzY3tV*X2ZMmRLe0Hhpes1uLek*fS2z6MDLeaL6q22H7Ch+xEfodyvJDiq58w82CZl4t62khCViqL*VkNdhtpvltNL+hU8YexI52WwvnG4eqSxRdTO9vK2Fy0t2NWL2HdnzdZPlrOq3eLuNbl9TFRiVonBTp*7wGC8oIyAllR4y4miz0A07OPEoLYg11gahrMz6oyaQLe4Oy+IbO2P4v98mrZmZ3ZOAm1tTFuFWH7CnqgIXWCKEXppKCsJu0MUQpzRIH+5189gNGVPXXrugl8D2QFoSzAp6aqYfoh6sclTJL6hJnf4sTqDogAnfsMI8YKnNOOxhOGJNkVZ2TtIKNAz2BF0c8BEUEp0Bk5oZ9La9Vpx7sfvYfmTDRBDxweehQp0MFAEhVZ07iBJAr6QPmDfrt0ZWHTfMOIgR6oHmmKogrqgB+IvKaoXJfYxe8*AXb1UsRgUVGgA8vFrayIo5EjyFid2bbB5YaVG+BzoA9jPJnHx3EUJk3q8cF4Rxzp6Nc7Hl9H0pxXLLPMyvpaLjK1yPjZ6z8UAToYsmOgUEMUVqtj9UZopCrk4irBcDmH50Tr54m2DPE8886TcjAJQ2uwiNoRTG79oZbu5CBBl9mGWkEQtannSlkylI1h*tp1S9G5SNCvzSyyZVM79LeX275qjFAeBMeU7JQxXiT7d1K6oTOqrSV0OK*iK1rDlwmnSNEguB7G*KF8QWibijOYlDwkwibG*vHlZiyfln2sTPXjqSoebuqk6n6zAj02H8NOwP+W7gm8cxh37*1S48db8i*7aEbybrMWpmGQrs0tbF1YHp00Uj13laJLHk2k6SwaCn0Haytwv**VA00FWVaTA9ABxCmpixT0AKlPnWUdnNW*aWYZnGMZz8krSJnxuQar4oAog4cG6Lwi8bIoiZL8zFqQuplAugM64KfibiJ2nm6NpvEZZB9bBYzumzgzcP8bUEsBAhQDFAAACAgAXYHkWhgMHHJVBAAAcAcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAfQQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254769902543',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'RN',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
