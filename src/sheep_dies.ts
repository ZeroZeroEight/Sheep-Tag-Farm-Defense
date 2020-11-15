
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Sheep Dies
//===========================================================================
const Trig_Sheep_Dies_Conditions = (): boolean => {


	if ( ( ! ( IsUnitType( GetTriggerUnit(), UNIT_TYPE_ANCIENT ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Sheep_Dies_Func001Func001C = (): boolean => {


	if ( ( ! ( udg_Income[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] > 15 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Sheep_Dies_Func001Func002C = (): boolean => {


	if ( ( ! ( udg_Income[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] > 30 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Sheep_Dies_Func001C = (): boolean => {


	if ( ( ! ( udg_Upgrades[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Sheep_Dies_Func003A = (): void => {

	RemoveUnit( GetEnumUnit() )

};


const Trig_Sheep_Dies_Func007Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_Revives[ GetConvertedPlayerId( GetTriggerPlayer() ) ] === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Sheep_Dies_Func007Func001Func001C = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( udg_SetupString[ 4 ], false ), 1, 1 ) === "h" ) ) ) {

		return false;

	}

	return true;

};


const Trig_Sheep_Dies_Func007Func001Func005Func001Func002C = (): boolean => {


	if ( ( ! ( udg_Revives[ GetConvertedPlayerId( GetTriggerPlayer() ) ] === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Sheep_Dies_Func007Func001Func005Func001C = (): boolean => {


	if ( ( ! ( SubStringBJ( udg_SaveString, 1, 1 ) === "h" ) ) ) {

		return false;

	}

	return true;

};


const Trig_Sheep_Dies_Func007Func001Func005Func002C = (): boolean => {


	if ( ( ( udg_RoundInfo[ 1 ] === 15 ) ) ) {

		return true;

	}


	if ( ( ( udg_RoundInfo[ 1 ] === 16 ) ) ) {

		return true;

	}


	if ( ( ( udg_RoundInfo[ 1 ] === 17 ) ) ) {

		return true;

	}


	if ( ( ( udg_RoundInfo[ 1 ] === 10 ) ) ) {

		return true;

	}


	if ( ( ( udg_RoundInfo[ 1 ] === 6 ) ) ) {

		return true;

	}

	return false;

};


const Trig_Sheep_Dies_Func007Func001Func005C = (): boolean => {


	if ( ( ! Trig_Sheep_Dies_Func007Func001Func005Func002C() ) ) {

		return false;

	}

	return true;

};


const Trig_Sheep_Dies_Func007Func001C = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( udg_SetupString[ 4 ], false ), 1, 1 ) === "p" ) ) ) {

		return false;

	}

	return true;

};


const Trig_Sheep_Dies_Func007C = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( udg_SetupString[ 4 ], false ), 1, 1 ) === "a" ) ) ) {

		return false;

	}

	return true;

};


const Trig_Sheep_Dies_Actions = (): void => {


	if ( ( Trig_Sheep_Dies_Func001C() ) ) {


		if ( ( Trig_Sheep_Dies_Func001Func001C() ) ) {

			udg_Income[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] = 15;
			SetPlayerStateBJ( GetOwningPlayer( GetTriggerUnit() ), PLAYER_STATE_RESOURCE_FOOD_USED, 15 )

		} else {

		null

		}


	} else {


		if ( ( Trig_Sheep_Dies_Func001Func002C() ) ) {

			udg_Income[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] = 30;
			SetPlayerStateBJ( GetOwningPlayer( GetTriggerUnit() ), PLAYER_STATE_RESOURCE_FOOD_USED, 30 )

		} else {

		null

		}


	}

	udg_TempGroup = GetUnitsOfPlayerAll( GetTriggerPlayer() );
	ForGroupBJ( udg_TempGroup, Trig_Sheep_Dies_Func003A )
	DestroyGroup( udg_TempGroup )
	udg_FC[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] = 0;
	DisplayTextToForce( GetPlayersAll(), ( udg_PlayerColor[ GetConvertedPlayerId( GetTriggerPlayer() ) ] + ( GetPlayerName( GetTriggerPlayer() ) + "|R |cffffcc00was killed by the enemies!" ) ) )

	if ( ( Trig_Sheep_Dies_Func007C() ) ) {

		ForceAddPlayerSimple( GetTriggerPlayer(), udg_Spirit )
		ForceRemovePlayerSimple( GetTriggerPlayer(), udg_Sheep )
		DisplayTextToForce( GetPlayersAll(), "TRIGSTR_177" )
		udg_TempPoint = GetRectCenter( gg_rct_Fence_Zone );
		CreateNUnitsAtLoc( 1, FourCC( "e002" ), GetTriggerPlayer(), udg_TempPoint, bj_UNIT_FACING )
		SelectUnitForPlayerSingle( GetLastCreatedUnit(), GetTriggerPlayer() )
		PanCameraToTimedLocForPlayer( GetTriggerPlayer(), udg_TempPoint, 0 )
		RemoveLocation( udg_TempPoint )

	} else {


		if ( ( Trig_Sheep_Dies_Func007Func001C() ) ) {

			ForceAddPlayerSimple( GetTriggerPlayer(), udg_Spirit )
			ForceRemovePlayerSimple( GetTriggerPlayer(), udg_Sheep )

			if ( ( Trig_Sheep_Dies_Func007Func001Func005C() ) ) {


				if ( ( Trig_Sheep_Dies_Func007Func001Func005Func001C() ) ) {


					if ( ( Trig_Sheep_Dies_Func007Func001Func005Func001Func002C() ) ) {

						DisplayTextToForce( GetPlayersAll(), ( udg_PlayerColor[ GetConvertedPlayerId( GetTriggerPlayer() ) ] + ( GetPlayerName( GetTriggerPlayer() ) + "|R |cffffcc00has run out of lives." ) ) )

					} else {

					null

					}


				} else {

				null

				}

				DisplayTextToForce( GetPlayersAll(), "TRIGSTR_632" )

			} else {

			null

			}

			DisplayTextToForce( GetPlayersAll(), "TRIGSTR_178" )

		} else {


			if ( ( Trig_Sheep_Dies_Func007Func001Func001C() ) ) {


				if ( ( Trig_Sheep_Dies_Func007Func001Func001Func001C() ) ) {

					ForceAddPlayerSimple( GetTriggerPlayer(), udg_Spirit )
					ForceRemovePlayerSimple( GetTriggerPlayer(), udg_Sheep )
					DisplayTextToForce( GetPlayersAll(), ( udg_PlayerColor[ GetConvertedPlayerId( GetTriggerPlayer() ) ] + ( GetPlayerName( GetTriggerPlayer() ) + "|R |cffffcc00has run out of lives." ) ) )

				} else {

					udg_Revives[ GetConvertedPlayerId( GetTriggerPlayer() ) ] = ( udg_Revives[ GetConvertedPlayerId( GetTriggerPlayer() ) ] - 1 );
					DisplayTextToForce( GetPlayersAll(), ( udg_PlayerColor[ GetConvertedPlayerId( GetTriggerPlayer() ) ] + ( GetPlayerName( GetTriggerPlayer() ) + ( "|R |cffffcc00has been revived and has |r" + ( I2S( udg_Revives[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] ) + "|cffffcc00 revives remaining." ) ) ) ) )
					udg_TempPoint = GetPlayerStartLocationLoc( ForcePickRandomPlayer( udg_SaveGroup ) );
					CreateNUnitsAtLoc( 1, FourCC( "u000" ), GetTriggerPlayer(), udg_TempPoint, bj_UNIT_FACING )
					SelectUnitForPlayerSingle( GetLastCreatedUnit(), GetTriggerPlayer() )
					PanCameraToTimedLocForPlayer( GetTriggerPlayer(), udg_TempPoint, 0 )
					RemoveLocation( udg_TempPoint )

				}


			} else {

			null

			}


		}


	}

	ConditionalTriggerExecute( gg_trg_Leaderboard )

};


//===========================================================================
const InitTrig_Sheep_Dies = (): void => {

	gg_trg_Sheep_Dies = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ( gg_trg_Sheep_Dies, EVENT_PLAYER_UNIT_DEATH )
	TriggerAddCondition( gg_trg_Sheep_Dies, Condition( Trig_Sheep_Dies_Conditions ) )
	TriggerAddAction( gg_trg_Sheep_Dies, Trig_Sheep_Dies_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Sheep_Dies();

} );
