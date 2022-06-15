
let params = (new URL(document.location)).searchParams;
let bid_no = params.get("aqi_bid");
bid_no && fetch(`https://hooks.zapier.com/hooks/catch/{{hook_key}}/?aqi_bid=${bid_no}`);
