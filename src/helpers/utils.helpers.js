// remaining stormglass api requests
export const remainingRequests = (data) => {
  const dailyRequests = data.meta.dailyQuota;
  const usedRequests = data.meta.requestCount;
  console.log(`Remaining Storm Glass API requests today: ${dailyRequests - usedRequests}`);
};
