# Halo Bridge <> LibBurner Example

This app shows how to integrate LibBurner with HaLo Bridge to allow interacting with Burner tags through
a computer with a dedicated NFC reader.

Features:

* Reading information about the Burner tag (address, tag type, selected theme etc);
* Checking the USD2 balance of the Burner tag;
* Sending USD2 from Burner to an external address (gasless);

## Usage

### Setting HaLo Bridge up
1. Download [HaLo Tools](https://github.com/arx-research/libhalo/releases).
2. Launch HaLo Bridge.
3. Plug your USB NFC (PC/SC) reader into your computer.
4. Tap your Burner card onto the reader.

### Running this project
1. Clone this repository and run `yarn install`.
2. Run `yarn start`
