
let params = (new URL(document.location)).searchParams;
let bid_no = params.get("aqi_bid");
bid_no && fetch(`https://hooks.zapier.com/hooks/catch/8923119/bk1tlcw/?aqi_bid=${bid_no}`);
