{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "nextcloud";
  nativeBuildInputs = with pkgs;
    [ nodejs_20
      php83
      php83Packages.composer
    ];
}
