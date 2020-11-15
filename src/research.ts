
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Research
//
// removes the a farm if the player orders it to destroy, then does the same as "FC Minus" to enable "Destroy Last Farm"
//===========================================================================
const Trig_Research_Func001C = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTrainedUnit() ) !== FourCC( "h00Q" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Research_Func002Func001Func001Func001Func001Func001Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTrainedUnit() ) === FourCC( "h00Q" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Research_Func002Func001Func001Func001Func001Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTrainedUnit() ) === FourCC( "h00U" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Research_Func002Func001Func001Func001Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTrainedUnit() ) === FourCC( "h00V" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Research_Func002Func001Func001Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTrainedUnit() ) === FourCC( "h00T" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Research_Func002Func001Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTrainedUnit() ) === FourCC( "h00P" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Research_Func002Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTrainedUnit() ) === FourCC( "h00O" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Research_Func002Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTrainedUnit() ) === FourCC( "h00N" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Research_Func002Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTrainedUnit() ) === FourCC( "h00R" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Research_Func002Func001C = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTrainedUnit() ) === FourCC( "h00K" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Research_Func002C = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTrainedUnit() ) === FourCC( "h00J" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Research_Actions = (): void => {


	if ( ( Trig_Research_Func001C() ) ) {

		SetPlayerTechMaxAllowedSwap( GetUnitTypeId( GetTrainedUnit() ), 0, GetOwningPlayer( GetTriggerUnit() ) )

	} else {

	null

	}


	if ( ( Trig_Research_Func002C() ) ) {

		SetPlayerHandicapBJ( GetOwningPlayer( GetTriggerUnit() ), ( GetPlayerHandicapBJ( GetOwningPlayer( GetTriggerUnit() ) ) + 25 ) )

	} else {


		if ( ( Trig_Research_Func002Func001C() ) ) {

			SetPlayerUnitAvailableBJ( FourCC( "h00L" ), false, GetOwningPlayer( GetTriggerUnit() ) )
			SetPlayerUnitAvailableBJ( FourCC( "h005" ), false, GetOwningPlayer( GetTriggerUnit() ) )
			SetPlayerUnitAvailableBJ( FourCC( "h00M" ), true, GetOwningPlayer( GetTriggerUnit() ) )

		} else {


			if ( ( Trig_Research_Func002Func001Func001C() ) ) {

				SetPlayerUnitAvailableBJ( FourCC( "h001" ), false, GetOwningPlayer( GetTriggerUnit() ) )
				SetPlayerUnitAvailableBJ( FourCC( "h00S" ), true, GetOwningPlayer( GetTriggerUnit() ) )

			} else {


				if ( ( Trig_Research_Func002Func001Func001Func001C() ) ) {

					AdjustPlayerStateBJ( 10, GetOwningPlayer( GetTriggerUnit() ), PLAYER_STATE_RESOURCE_FOOD_CAP )
					SetPlayerTechMaxAllowedSwap( FourCC( "h00O" ), 1, GetOwningPlayer( GetTriggerUnit() ) )

				} else {


					if ( ( Trig_Research_Func002Func001Func001Func001Func001C() ) ) {

						AdjustPlayerStateBJ( 10, GetOwningPlayer( GetTriggerUnit() ), PLAYER_STATE_RESOURCE_FOOD_CAP )
						SetPlayerTechMaxAllowedSwap( FourCC( "h00P" ), 1, GetOwningPlayer( GetTriggerUnit() ) )

					} else {


						if ( ( Trig_Research_Func002Func001Func001Func001Func001Func001C() ) ) {

							udg_Upgrades[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] = 1;

						} else {


							if ( ( Trig_Research_Func002Func001Func001Func001Func001Func001Func001C() ) ) {

								udg_Upgrades[ ( GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) + 8 ) ] = 1;
								SetPlayerUnitAvailableBJ( FourCC( "n000" ), false, GetOwningPlayer( GetTriggerUnit() ) )
								SetPlayerUnitAvailableBJ( FourCC( "n00B" ), true, GetOwningPlayer( GetTriggerUnit() ) )
								SetPlayerTechMaxAllowedSwap( FourCC( "h00U" ), 1, GetOwningPlayer( GetTriggerUnit() ) )

							} else {


								if ( ( Trig_Research_Func002Func001Func001Func001Func001Func001Func001Func001C() ) ) {

									udg_Upgrades[ ( GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) + 8 ) ] = 3;

								} else {


									if ( ( Trig_Research_Func002Func001Func001Func001Func001Func001Func001Func001Func001C() ) ) {

										udg_Upgrades[ ( GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) + 8 ) ] = 2;
										SetPlayerTechMaxAllowedSwap( FourCC( "h00V" ), 1, GetOwningPlayer( GetTriggerUnit() ) )

									} else {


										if ( ( Trig_Research_Func002Func001Func001Func001Func001Func001Func001Func001Func001Func001C() ) ) {

											DisplayTimedTextToForce( GetPlayersAll(), 7, ( "                                                                       " + ( udg_PlayerColor[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] + ( GetPlayerName( GetOwningPlayer( GetTriggerUnit() ) ) + "|r |cffffcc00has purchased a continue!" ) ) ) )
											udg_Continue[ 1 ] = ( udg_Continue[ 1 ] + 1 );
											ConditionalTriggerExecute( gg_trg_Leaderboard )

										} else {

										null

										}


									}


								}


							}


						}


					}


				}


			}


		}


	}

	udg_TempGroup = GetUnitsOfPlayerAndTypeId( GetOwningPlayer( GetTriggerUnit() ), FourCC( "u000" ) );
	udg_TempUnit = GroupPickRandomUnit( udg_TempGroup );
	udg_TempPoint = GetUnitLoc( udg_TempUnit );
	DestroyGroup( udg_TempGroup )
	AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Human\\HolyBolt\\HolyBoltSpecialArt.mdl" )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )
	CreateTextTagLocBJ( ( "|cffffcc00" + GetUnitName( GetTrainedUnit() ) ), udg_TempPoint, 0, 11, 100, 100, 100, 0 )
	SetTextTagPermanentBJ( GetLastCreatedTextTag(), false )
	SetTextTagFadepointBJ( GetLastCreatedTextTag(), 1.6 )
	SetTextTagVelocityBJ( GetLastCreatedTextTag(), 55, GetRandomDirectionDeg() )
	SetTextTagLifespanBJ( GetLastCreatedTextTag(), 3.1 )
	RemoveLocation( udg_TempPoint )
	RemoveUnit( GetTrainedUnit() )

};


//===========================================================================
const InitTrig_Research = (): void => {

	gg_trg_Research = CreateTrigger();
	TriggerRegisterPlayerUnitEventSimple( gg_trg_Research, Player( 0 ), EVENT_PLAYER_UNIT_TRAIN_FINISH )
	TriggerRegisterPlayerUnitEventSimple( gg_trg_Research, Player( 1 ), EVENT_PLAYER_UNIT_TRAIN_FINISH )
	TriggerRegisterPlayerUnitEventSimple( gg_trg_Research, Player( 2 ), EVENT_PLAYER_UNIT_TRAIN_FINISH )
	TriggerRegisterPlayerUnitEventSimple( gg_trg_Research, Player( 3 ), EVENT_PLAYER_UNIT_TRAIN_FINISH )
	TriggerRegisterPlayerUnitEventSimple( gg_trg_Research, Player( 4 ), EVENT_PLAYER_UNIT_TRAIN_FINISH )
	TriggerRegisterPlayerUnitEventSimple( gg_trg_Research, Player( 5 ), EVENT_PLAYER_UNIT_TRAIN_FINISH )
	TriggerRegisterPlayerUnitEventSimple( gg_trg_Research, Player( 6 ), EVENT_PLAYER_UNIT_TRAIN_FINISH )
	TriggerRegisterPlayerUnitEventSimple( gg_trg_Research, Player( 7 ), EVENT_PLAYER_UNIT_TRAIN_FINISH )
	TriggerAddAction( gg_trg_Research, Trig_Research_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Research();
} );
