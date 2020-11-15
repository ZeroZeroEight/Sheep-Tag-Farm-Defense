
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: New Round
//===========================================================================
const Trig_New_Round_Func001Func001Func001C = (): boolean => {


	if ( ( ! ( IsItemHiddenBJ( GetEnumItem() ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func001Func001A = (): void => {


	if ( ( Trig_New_Round_Func001Func001Func001C() ) ) {

		RemoveItem( GetEnumItem() )

	} else {

	null

	}


};


const Trig_New_Round_Func001Func002Func001A = (): void => {

	SetItemVisibleBJ( false, GetEnumItem() )

};


const Trig_New_Round_Func001Func003A = (): void => {

	SetItemVisibleBJ( false, GetEnumItem() )

};


const Trig_New_Round_Func001Func004Func001C = (): boolean => {


	if ( ( ! ( IsItemHiddenBJ( GetEnumItem() ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func001Func004A = (): void => {


	if ( ( Trig_New_Round_Func001Func004Func001C() ) ) {

		RemoveItem( GetEnumItem() )

	} else {

	null

	}


};


const Trig_New_Round_Func001Func005Func001A = (): void => {

	SetItemVisibleBJ( true, GetEnumItem() )

};


const Trig_New_Round_Func001Func006A = (): void => {

	SetItemVisibleBJ( true, GetEnumItem() )

};


const Trig_New_Round_Func001C = (): boolean => {


	if ( ( ! ( CheckItemStatus( RandomItemInRectSimpleBJ( udg_RoundRegion[ 1 ] ), bj_ITEM_STATUS_HIDDEN ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func001Func003C = (): boolean => {


	if ( ( ! ( ( CountPlayersInForceBJ( udg_Sheep ) + CountPlayersInForceBJ( udg_Spirit ) ) > 4 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func001C = (): boolean => {


	if ( ( ! ( ( CountPlayersInForceBJ( udg_Sheep ) + CountPlayersInForceBJ( udg_Spirit ) ) > 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func003Func004Func001C = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( GetItemName( GetEnumItem() ), false ), 1, 1 ) === SubStringBJ( StringCase( udg_SetupString[ 0 ], false ), 1, 1 ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func003Func004A = (): void => {


	if ( ( Trig_New_Round_Func003Func003Func004Func001C() ) ) {

		UnitAddItemByIdSwapped( GetItemTypeId( GetEnumItem() ), GetLastCreatedUnit() )

	} else {

	null

	}


};


const Trig_New_Round_Func003Func003A = (): void => {

	udg_TempPoint = GetRectCenter( gg_rct_Fence_Zone );
	CreateNUnitsAtLoc( 1, GetUnitTypeId( GetEnumUnit() ), Player( 8 ), udg_TempPoint, bj_UNIT_FACING )
	RemoveLocation( udg_TempPoint )
	EnumItemsInRectBJ( udg_RoundRegion[ udg_RoundInfo[ 1 ] ], Trig_New_Round_Func003Func003Func004A )

};


const Trig_New_Round_Func003Func005Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 17 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func005Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 16 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func005Func001Func001C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 15 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func005Func001C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 10 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func005C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 6 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func006Func002Func002Func002C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 13 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func006Func002Func002Func004Func001Func001C = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( GetItemName( GetEnumItem() ), false ), 1, 1 ) === SubStringBJ( StringCase( udg_SetupString[ 0 ], false ), 1, 1 ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func006Func002Func002Func004Func001A = (): void => {


	if ( ( Trig_New_Round_Func003Func006Func002Func002Func004Func001Func001C() ) ) {

		UnitAddItemByIdSwapped( GetItemTypeId( GetEnumItem() ), GetEnumUnit() )
		SetItemUserData( GetLastCreatedItem(), 1 )

	} else {

	null

	}


};


const Trig_New_Round_Func003Func006Func002Func002Func004A = (): void => {

	EnumItemsInRectBJ( udg_RoundRegion[ udg_RoundInfo[ 1 ] ], Trig_New_Round_Func003Func006Func002Func002Func004Func001A )

};


const Trig_New_Round_Func003Func006Func002Func002Func005Func001C = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( GetItemName( GetEnumItem() ), false ), 1, 1 ) === SubStringBJ( StringCase( udg_SetupString[ 0 ], false ), 1, 1 ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func006Func002Func002Func005A = (): void => {


	if ( ( Trig_New_Round_Func003Func006Func002Func002Func005Func001C() ) ) {

		UnitAddItemByIdSwapped( GetItemTypeId( GetEnumItem() ), GetLastCreatedUnit() )
		SetItemUserData( GetLastCreatedItem(), 1 )

	} else {

	null

	}


};


const Trig_New_Round_Func003Func006Func002Func002C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 5 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func006Func002A = (): void => {

	udg_TempPoint = GetRectCenter( gg_rct_Fence_Zone );

	if ( ( Trig_New_Round_Func003Func006Func002Func002C() ) ) {

		CreateNUnitsAtLoc( 7, GetUnitTypeId( GetEnumUnit() ), ConvertedPlayer( GetForLoopIndexA() ), udg_TempPoint, bj_UNIT_FACING )
		ForGroupBJ( GetLastCreatedGroup(), Trig_New_Round_Func003Func006Func002Func002Func004A )

	} else {

		CreateNUnitsAtLoc( 1, GetUnitTypeId( GetEnumUnit() ), ConvertedPlayer( GetForLoopIndexA() ), udg_TempPoint, bj_UNIT_FACING )

		if ( ( Trig_New_Round_Func003Func006Func002Func002Func002C() ) ) {

			SetUnitLifeBJ( GetLastCreatedUnit(), 62485 )

		} else {

		null

		}

		EnumItemsInRectBJ( udg_RoundRegion[ udg_RoundInfo[ 1 ] ], Trig_New_Round_Func003Func006Func002Func002Func005A )

	}

	RemoveLocation( udg_TempPoint )

};


const Trig_New_Round_Func003Func006Func004Func002Func004Func001C = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( GetItemName( GetEnumItem() ), false ), 1, 1 ) === SubStringBJ( StringCase( udg_SetupString[ 0 ], false ), 1, 1 ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func006Func004Func002Func004A = (): void => {


	if ( ( Trig_New_Round_Func003Func006Func004Func002Func004Func001C() ) ) {

		UnitAddItemByIdSwapped( GetItemTypeId( GetEnumItem() ), GetLastCreatedUnit() )

	} else {

	null

	}


};


const Trig_New_Round_Func003Func006Func004Func002A = (): void => {

	udg_TempPoint = GetRectCenter( gg_rct_Fence_Zone );
	CreateNUnitsAtLoc( 1, GetUnitTypeId( GetEnumUnit() ), ConvertedPlayer( GetForLoopIndexA() ), udg_TempPoint, bj_UNIT_FACING )
	RemoveLocation( udg_TempPoint )
	EnumItemsInRectBJ( gg_rct_Round_3b, Trig_New_Round_Func003Func006Func004Func002Func004A )

};


const Trig_New_Round_Func003Func006Func004C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 3 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func007Func001Func001C = (): boolean => {


	if ( ( ! ( SubStringBJ( udg_SetupString[ 0 ], 1, 1 ) === "P" ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func007Func001C = (): boolean => {


	if ( ( ! ( SubStringBJ( udg_SetupString[ 0 ], 1, 1 ) === "H" ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func007Func002Func001Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 12 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func007Func002Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 14 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func007Func002Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 13 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func007Func002Func001Func001C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 9 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func007Func002Func001C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 7 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func007Func002C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 5 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003Func007C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func003C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] !== 6 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_RoundInfo[ 1 ] !== 10 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_RoundInfo[ 1 ] !== 15 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_RoundInfo[ 1 ] !== 16 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_RoundInfo[ 1 ] !== 17 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func005Func001C = (): boolean => {


	if ( ( ! ( udg_TimeLasted > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func005C = (): boolean => {


	if ( ( ! ( udg_Continue[ 0 ] === 100 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func007Func001Func001Func002C = (): boolean => {


	if ( ( ! ( ( CountPlayersInForceBJ( udg_Sheep ) + CountPlayersInForceBJ( udg_Spirit ) ) > 4 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func007Func001Func001C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] >= 15 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func007Func001Func003C = (): boolean => {


	if ( ( ! ( ( CountPlayersInForceBJ( udg_Sheep ) + CountPlayersInForceBJ( udg_Spirit ) ) > 4 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func007Func001C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 10 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func007Func003C = (): boolean => {


	if ( ( ! ( ( CountPlayersInForceBJ( udg_Sheep ) + CountPlayersInForceBJ( udg_Spirit ) ) > 4 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Func007C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] === 6 ) ) ) {

		return false;

	}

	return true;

};


const Trig_New_Round_Actions = (): void => {


	if ( ( Trig_New_Round_Func001C() ) ) {

		EnumItemsInRectBJ( GetPlayableMapRect(), Trig_New_Round_Func001Func001A )

	} else {

		bj_forLoopAIndex = 1;
		bj_forLoopAIndexEnd = 17;

		while ( true ) {

			if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
			EnumItemsInRectBJ( udg_RoundRegion[ GetForLoopIndexA() ], Trig_New_Round_Func001Func002Func001A )
			bj_forLoopAIndex = bj_forLoopAIndex + 1;

		}


		EnumItemsInRectBJ( gg_rct_Round_3b, Trig_New_Round_Func001Func003A )
		EnumItemsInRectBJ( GetPlayableMapRect(), Trig_New_Round_Func001Func004A )
		bj_forLoopAIndex = 1;
		bj_forLoopAIndexEnd = 17;

		while ( true ) {

			if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
			EnumItemsInRectBJ( udg_RoundRegion[ GetForLoopIndexA() ], Trig_New_Round_Func001Func005Func001A )
			bj_forLoopAIndex = bj_forLoopAIndex + 1;

		}


		EnumItemsInRectBJ( gg_rct_Round_3b, Trig_New_Round_Func001Func006A )

	}

	EnableTrigger( gg_trg_Antirun )

	if ( ( Trig_New_Round_Func003C() ) ) {

		bj_forLoopAIndex = 9;
		bj_forLoopAIndexEnd = 12;

		while ( true ) {

			if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
			udg_TempGroup = GetUnitsInRectAll( udg_RoundRegion[ udg_RoundInfo[ 1 ] ] );
			ForGroupBJ( udg_TempGroup, Trig_New_Round_Func003Func006Func002A )
			DestroyGroup( udg_TempGroup )

			if ( ( Trig_New_Round_Func003Func006Func004C() ) ) {

				udg_TempGroup = GetUnitsInRectAll( gg_rct_Round_3b );
				ForGroupBJ( udg_TempGroup, Trig_New_Round_Func003Func006Func004Func002A )
				DestroyGroup( udg_TempGroup )

			} else {

			null

			}

			bj_forLoopAIndex = bj_forLoopAIndex + 1;

		}



		if ( ( Trig_New_Round_Func003Func007C() ) ) {


			if ( ( Trig_New_Round_Func003Func007Func001C() ) ) {

				udg_Continue[ 1 ] = 0;

			} else {


				if ( ( Trig_New_Round_Func003Func007Func001Func001C() ) ) {

					udg_Continue[ 1 ] = 1;

				} else {

					udg_Continue[ 1 ] = 2;

				}


			}


		} else {


			if ( ( Trig_New_Round_Func003Func007Func002C() ) ) {

				EnableTrigger( gg_trg_Zombie_Stream )

			} else {


				if ( ( Trig_New_Round_Func003Func007Func002Func001C() ) ) {

					EnableTrigger( gg_trg_Shuriken )

				} else {


					if ( ( Trig_New_Round_Func003Func007Func002Func001Func001C() ) ) {

						EnableTrigger( gg_trg_Ice_Leap )

					} else {


						if ( ( Trig_New_Round_Func003Func007Func002Func001Func001Func001C() ) ) {

							EnableTrigger( gg_trg_Lightning_Line )
							EnableTrigger( gg_trg_Stampede )

						} else {


							if ( ( Trig_New_Round_Func003Func007Func002Func001Func001Func001Func001C() ) ) {

								EnableTrigger( gg_trg_Thrust )

							} else {


								if ( ( Trig_New_Round_Func003Func007Func002Func001Func001Func001Func001Func001C() ) ) {

									EnableTrigger( gg_trg_Swarm )

								} else {

								null

								}


							}


						}


					}


				}


			}


		}


	} else {


		if ( ( Trig_New_Round_Func003Func001C() ) ) {

			udg_SaveString = udg_SetupString[ 4 ];
			udg_SetupString[ 4 ] = "Professional";

			if ( ( Trig_New_Round_Func003Func001Func003C() ) ) {

				udg_TimeModifier = ( udg_TimeModifier + 0.5 );

			} else {

			null

			}


		} else {

		null

		}

		udg_TempGroup = GetUnitsInRectAll( udg_RoundRegion[ udg_RoundInfo[ 1 ] ] );
		ForGroupBJ( udg_TempGroup, Trig_New_Round_Func003Func003A )
		DestroyGroup( udg_TempGroup )

		if ( ( Trig_New_Round_Func003Func005C() ) ) {

			EnableTrigger( gg_trg_Mass_Link )
			udg_TimeModifier = ( udg_TimeModifier + 0.25 );

		} else {


			if ( ( Trig_New_Round_Func003Func005Func001C() ) ) {

				EnableTrigger( gg_trg_Goblin_Rocket_Spray )
				EnableTrigger( gg_trg_Homing_Jump )
				StartTimerBJ( udg_RobotTimer, false, 45 )
				udg_RoundInfo[ 10 ] = 0;
				udg_TimeModifier = ( udg_TimeModifier + 0.5 );

			} else {


				if ( ( Trig_New_Round_Func003Func005Func001Func001C() ) ) {

					udg_TimeModifier = ( udg_TimeModifier + 1 );
					EnableTrigger( gg_trg_Natural_Relocation )

				} else {


					if ( ( Trig_New_Round_Func003Func005Func001Func001Func001C() ) ) {

						udg_TimeModifier = ( udg_TimeModifier + 1 );
						EnableTrigger( gg_trg_Axemaster )
						EnableTrigger( gg_trg_Image_Enter )
						StartTimerBJ( udg_RobotTimer, false, 30 )

					} else {


						if ( ( Trig_New_Round_Func003Func005Func001Func001Func001Func001C() ) ) {

							udg_TimeModifier = ( udg_TimeModifier + 1 );
							EnableTrigger( gg_trg_Archmage )

						} else {

						null

						}


					}


				}


			}


		}


	}

	DestroyTimerDialogBJ( GetLastCreatedTimerDialogBJ() )

	if ( ( Trig_New_Round_Func005C() ) ) {


		if ( ( Trig_New_Round_Func005Func001C() ) ) {

			DisplayTimedTextToForce( GetPlayersAll(), 5, ( "                             -" + ( I2S( R2I( udg_TimeLasted ) ) + " |cffffcc00seconds from continue." ) ) )

		} else {

		null

		}

		StartTimerBJ( udg_RoundTimer, false, ( ( 120 * udg_TimeModifier ) - udg_TimeLasted ) )
		udg_Continue[ 0 ] = 0;

	} else {

		StartTimerBJ( udg_RoundTimer, false, ( 120 * udg_TimeModifier ) )

	}

	CreateTimerDialogBJ( GetLastCreatedTimerBJ(), "TRIGSTR_091" )

	if ( ( Trig_New_Round_Func007C() ) ) {

		udg_TimeModifier = ( udg_TimeModifier - 0.25 );

		if ( ( Trig_New_Round_Func007Func003C() ) ) {

			udg_TimeModifier = ( udg_TimeModifier - 0.5 );

		} else {

		null

		}


	} else {


		if ( ( Trig_New_Round_Func007Func001C() ) ) {

			udg_TimeModifier = ( udg_TimeModifier - 0.5 );

			if ( ( Trig_New_Round_Func007Func001Func003C() ) ) {

				udg_TimeModifier = ( udg_TimeModifier - 0.5 );

			} else {

			null

			}


		} else {


			if ( ( Trig_New_Round_Func007Func001Func001C() ) ) {

				udg_TimeModifier = ( udg_TimeModifier - 1 );

				if ( ( Trig_New_Round_Func007Func001Func001Func002C() ) ) {

					udg_TimeModifier = ( udg_TimeModifier - 0.5 );

				} else {

				null

				}


			} else {

			null

			}


		}


	}


};


//===========================================================================
const InitTrig_New_Round = (): void => {

	gg_trg_New_Round = CreateTrigger();
	TriggerRegisterTimerExpireEventBJ( gg_trg_New_Round, udg_NewRoundTimer )
	TriggerAddAction( gg_trg_New_Round, Trig_New_Round_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_New_Round();

} );
