# Calculates the Aliquot sequence

Six implementations. See blog post here:
http://simia.net/wiki/Playing_around_with_Aliquot

The code in aliquot6 is from here:
https://github.com/cryptool-org/cto/blob/master/_ctoApps/factorization/src/msieve/worker/msieve.js

Published under Apache-2.

The compiled wasm file is from here:
https://github.com/cryptool-org/cto/blob/master/_ctoApps/factorization/src/msieve/worker/msieve.wasm

That's a compilation to WASM of the msieve project from here:
https://sourceforge.net/projects/msieve/

msieve is in the public domain.

To run any of the scripts, run

node aliquot6.js

Merely a reasonably recent node is required, no further prerequisites.

If you want to start from a different number, change the last line of the code.
