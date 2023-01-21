function getParticipants(handshakes) {
  let i = 0;
  for (i; 0 < handshakes; i++) {
    handshakes -= i;
  }
  return i;
}

console.log(getParticipants(22));