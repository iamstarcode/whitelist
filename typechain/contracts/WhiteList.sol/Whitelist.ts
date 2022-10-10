/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface WhitelistInterface extends utils.Interface {
  functions: {
    "addAddressToWhitelist()": FunctionFragment;
    "maxWhitelistedAddresses()": FunctionFragment;
    "numAddressesWhitelisted()": FunctionFragment;
    "whitelistedAddresses(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addAddressToWhitelist"
      | "maxWhitelistedAddresses"
      | "numAddressesWhitelisted"
      | "whitelistedAddresses"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addAddressToWhitelist",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxWhitelistedAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numAddressesWhitelisted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistedAddresses",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAddressToWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxWhitelistedAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numAddressesWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistedAddresses",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Whitelist extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WhitelistInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addAddressToWhitelist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    maxWhitelistedAddresses(overrides?: CallOverrides): Promise<[number]>;

    numAddressesWhitelisted(overrides?: CallOverrides): Promise<[number]>;

    whitelistedAddresses(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  addAddressToWhitelist(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  maxWhitelistedAddresses(overrides?: CallOverrides): Promise<number>;

  numAddressesWhitelisted(overrides?: CallOverrides): Promise<number>;

  whitelistedAddresses(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    addAddressToWhitelist(overrides?: CallOverrides): Promise<void>;

    maxWhitelistedAddresses(overrides?: CallOverrides): Promise<number>;

    numAddressesWhitelisted(overrides?: CallOverrides): Promise<number>;

    whitelistedAddresses(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    addAddressToWhitelist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    maxWhitelistedAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    numAddressesWhitelisted(overrides?: CallOverrides): Promise<BigNumber>;

    whitelistedAddresses(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAddressToWhitelist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    maxWhitelistedAddresses(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numAddressesWhitelisted(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelistedAddresses(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}